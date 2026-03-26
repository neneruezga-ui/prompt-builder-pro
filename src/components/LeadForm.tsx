import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Painting & Refinishing",
  "Siding Painting",
  "Exterior Wood Staining",
  "Door Painting & Staining",
];

interface LeadFormProps {
  id?: string;
}

const LeadForm = ({ id }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const canProceedStep1 = form.service !== "";
  const canProceedStep2 = form.name !== "" && form.phone !== "";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-lg p-8 text-center shadow-card"
      >
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll contact you within 24 hours to schedule your free estimate.</p>
      </motion.div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="bg-background rounded-lg p-6 md:p-8 shadow-elevated">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`h-2 w-full rounded-full transition-colors ${
                s <= step ? "bg-accent" : "bg-muted"
              }`}
            />
            <span className={`text-xs font-heading font-semibold ${s <= step ? "text-accent" : "text-muted-foreground"}`}>
              Step {s}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-1">What service do you need?</h3>
            <p className="text-sm text-muted-foreground mb-4">Select one to get started</p>
            <div className="grid grid-cols-1 gap-2">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    form.service === service
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    checked={form.service === service}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span className="font-body text-sm text-foreground">{service}</span>
                </label>
              ))}
            </div>
            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold"
            >
              Next Step →
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-1">Your Contact Info</h3>
            <p className="text-sm text-muted-foreground mb-4">We'll use this to schedule your free estimate</p>
            <div className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(650) 555-1234" required />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 font-heading font-semibold">
                ← Back
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold"
              >
                Next Step →
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-heading font-bold text-lg text-foreground mb-1">Almost Done!</h3>
            <p className="text-sm text-muted-foreground mb-4">Add any details about your project</p>
            <div className="space-y-3">
              <div>
                <Label htmlFor="address" className="text-foreground">Property Address</Label>
                <Input id="address" name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, Mountain View, CA" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Project Details</Label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 font-heading font-semibold">
                ← Back
              </Button>
              <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-base">
                Get My Free Estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden UTM fields */}
      {["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map((field) => (
        <input key={field} type="hidden" name={field} value={form[field as keyof typeof form]} />
      ))}
    </form>
  );
};

export default LeadForm;
