import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const steps = ["Contact Info", "Project Details", "Confirmation"];

const LeadForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    details: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      const val = params.get(key);
      if (val) utms[key] = val;
    });
    setUtmParams(utms);
  }, []);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    console.log("Form submitted:", { ...form, ...utmParams });
    setSubmitted(true);
  };

  const progress = ((step + 1) / steps.length) * 100;

  if (submitted) {
    return (
      <div className="bg-background rounded-xl p-8 shadow-elevated text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-secondary mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll contact you shortly with your free estimate.</p>
      </div>
    );
  }

  return (
    <div id="free-estimate" className="bg-background rounded-xl p-6 md:p-8 shadow-elevated">
      <h3 className="font-heading font-bold text-xl text-secondary mb-1 text-center">Get Your Free Estimate</h3>
      <p className="text-muted-foreground text-sm text-center mb-5">No obligation — takes less than a minute.</p>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          {steps.map((s, i) => (
            <span key={s} className={i <= step ? "text-primary font-semibold" : ""}>{s}</span>
          ))}
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="John Smith" value={form.name} onChange={(e) => update("name", e.target.value)} className="focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="(650) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="focus:ring-primary focus:border-primary" />
            </div>
            <Button className="w-full" onClick={() => setStep(1)} disabled={!form.name || !form.phone}>
              Next: Project Details
            </Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div>
              <Label htmlFor="service">Service Needed *</Label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select a service</option>
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Cabinet Refinishing</option>
                <option>Siding Painting</option>
                <option>Wood Staining</option>
                <option>Door Painting</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="address">Property Address</Label>
              <Input id="address" placeholder="123 Main St, Mountain View, CA" value={form.address} onChange={(e) => update("address", e.target.value)} className="focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="details">Project Details</Label>
              <Textarea id="details" placeholder="Tell us about your project..." value={form.details} onChange={(e) => update("details", e.target.value)} rows={3} className="focus:ring-primary focus:border-primary" />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setStep(0)}>Back</Button>
              <Button className="flex-1" onClick={() => setStep(2)} disabled={!form.service}>Next: Review</Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
              <p><span className="font-semibold text-secondary">Name:</span> {form.name}</p>
              <p><span className="font-semibold text-secondary">Phone:</span> {form.phone}</p>
              {form.email && <p><span className="font-semibold text-secondary">Email:</span> {form.email}</p>}
              <p><span className="font-semibold text-secondary">Service:</span> {form.service}</p>
              {form.address && <p><span className="font-semibold text-secondary">Address:</span> {form.address}</p>}
              {form.details && <p><span className="font-semibold text-secondary">Details:</span> {form.details}</p>}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
              <Button className="flex-1" onClick={handleSubmit}>Submit Request</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;
