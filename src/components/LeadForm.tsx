import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LeadFormProps {
  headerText?: string;
  subText?: string;
}

const timelines = [
  "ASAP (within 2 weeks)", "Within 1 month",
  "1–3 months", "Just planning ahead"
];

const budgets = [
  "Under $1,000", "$1,000 – $2,500",
  "$2,500 – $5,000", "$5,000+", "Not sure yet"
];

const serviceQuestions: Record<string, { question: string; options: string[] }[]> = {
  "Interior Painting": [
    { question: "How many rooms?", options: ["1–2 Rooms", "3–5 Rooms", "Whole Home", "Single Room Accent"] },
    { question: "Current wall condition?", options: ["Good — just needs fresh color", "Some peeling or damage", "New drywall", "Not sure"] },
    { question: "Ceilings included?", options: ["Yes", "No", "Just ceilings", "Not sure"] },
    { question: "Colors picked out?", options: ["Yes, I know what I want", "No, I need help choosing", "Open to suggestions"] },
  ],
  "Exterior Painting": [
    { question: "Surface type?", options: ["Wood Siding", "Stucco", "Brick", "Mixed / Not sure"] },
    { question: "Current condition?", options: ["Good — needs refresh", "Peeling / Fading", "Never been painted", "Not sure"] },
    { question: "Include trim and gutters?", options: ["Yes", "No", "Not sure"] },
    { question: "Single or multi-story?", options: ["Single story", "Two story", "Three+ story"] },
  ],
  "Cabinet Refinishing": [
    { question: "How many cabinets?", options: ["Under 20", "20–40", "40+", "Not sure"] },
    { question: "Current finish?", options: ["Painted", "Stained wood", "Raw / unfinished", "Not sure"] },
    { question: "New color in mind?", options: ["Yes, I have a color", "No, need help choosing", "Open to suggestions"] },
    { question: "Doors being replaced or refinished?", options: ["Just refinishing", "Replacing doors too", "Not sure yet"] },
  ],
  "Siding Painting": [
    { question: "Siding material?", options: ["Wood", "Fiber cement", "Vinyl", "Other / Not sure"] },
    { question: "Current condition?", options: ["Good — needs refresh", "Peeling / Fading", "Damaged areas", "Not sure"] },
    { question: "Include trim?", options: ["Yes", "No", "Not sure"] },
    { question: "Single or multi-story?", options: ["Single story", "Two story", "Three+ story"] },
  ],
  "Wood Staining": [
    { question: "What's being stained?", options: ["Deck", "Fence", "Pergola / Gazebo", "Other"] },
    { question: "Current condition?", options: ["New wood", "Weathered / Grayed", "Previously stained", "Not sure"] },
    { question: "Preferred finish?", options: ["Natural / Clear look", "Dark stain", "Light stain", "Not sure"] },
    { question: "Approximate size?", options: ["Small (under 200 sqft)", "Medium (200–500 sqft)", "Large (500+ sqft)", "Not sure"] },
  ],
  "Door Painting": [
    { question: "How many doors?", options: ["1–2 doors", "3–5 doors", "6+ doors"] },
    { question: "Interior or exterior?", options: ["Interior only", "Exterior only", "Both"] },
    { question: "Current condition?", options: ["Good — needs refresh", "Chipped / Peeling", "Never been painted"] },
    { question: "Colors picked out?", options: ["Yes, I know what I want", "No, need help choosing", "Open to suggestions"] },
  ],
};

const services = Object.keys(serviceQuestions);

const LeadForm = ({ headerText = "Get Your FREE Estimate", subText = "No obligation · Quick response" }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    service: "",
    serviceAnswers: {} as Record<string, string>,
    timeline: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      if (params.get(key)) utm[key] = params.get(key)!;
    });
    setUtmParams(utm);
  }, []);

  const currentServiceQuestions = formData.service ? serviceQuestions[formData.service] : [];
  const allServiceQuestionsAnswered = currentServiceQuestions.every(
    (q) => formData.serviceAnswers[q.question]
  );

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="font-heading text-2xl font-bold text-secondary mb-2">You're All Set!</h3>
        <p className="text-muted-foreground">We'll contact you within 24 hours to schedule your free estimate.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-secondary px-6 py-5 text-white">
        <h3 className="font-heading font-bold text-xl">{headerText}</h3>
        <p className="text-white/75 text-sm mt-1">{subText}</p>
        <div className="mt-4 bg-white/20 rounded-full h-1.5">
          <motion.div
            className="bg-primary h-1.5 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-white/60 text-xs mt-1">Step {step} of {totalSteps}</p>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">

          {/* STEP 1 — Service Selection */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-heading font-semibold text-secondary mb-4">What service do you need?</p>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button key={s}
                    onClick={() => {
                      setFormData({ ...formData, service: s, serviceAnswers: {} });
                      setStep(2);
                    }}
                    className={`text-left p-3 rounded-lg border text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 ${formData.service === s ? "border-primary bg-primary/10 text-primary" : "border-border"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 — Tailored Service Questions */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-heading font-semibold text-secondary mb-4">Tell us about your {formData.service.toLowerCase()} project</p>
              <div className="space-y-4">
                {currentServiceQuestions.map((q) => (
                  <div key={q.question}>
                    <Label className="text-sm font-medium mb-2 block">{q.question}</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((opt) => (
                        <button key={opt}
                          onClick={() => setFormData({
                            ...formData,
                            serviceAnswers: { ...formData.serviceAnswers, [q.question]: opt }
                          })}
                          className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all hover:border-primary ${formData.serviceAnswers[q.question] === opt ? "border-primary bg-primary/10 text-primary" : "border-border"}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <Button variant="outline" size="sm" onClick={() => setStep(1)} className="flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)} disabled={!allServiceQuestionsAnswered}>
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 — Timeline + Budget */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-heading font-semibold text-secondary mb-4">When and what's your budget?</p>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">When are you looking to start?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelines.map((t) => (
                      <button key={t} onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all hover:border-primary ${formData.timeline === t ? "border-primary bg-primary/10 text-primary" : "border-border"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Estimated budget range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button key={b} onClick={() => setFormData({ ...formData, budget: b })}
                        className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all hover:border-primary ${formData.budget === b ? "border-primary bg-primary/10 text-primary" : "border-border"}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <Button variant="outline" size="sm" onClick={() => setStep(2)} className="flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(4)} disabled={!formData.timeline || !formData.budget}>
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 4 — Contact Info */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-heading font-semibold text-secondary mb-4">Where should we send your estimate?</p>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="(555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" type="email" placeholder="john@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" placeholder="123 Main St, San Jose CA" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="mt-1" />
                </div>
                {Object.entries(utmParams).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <Button variant="outline" size="sm" onClick={() => setStep(3)} className="flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </Button>
                <Button className="flex-1" onClick={() => setSubmitted(true)} disabled={!formData.name || !formData.phone || !formData.address}>
                  Get My Free Estimate
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">No obligation · We never share your info</p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeadForm;
