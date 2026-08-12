import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AtSign,
  CheckCircle2,
  CalendarDays,
  Utensils,
  Wine,
} from "lucide-react"

const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  { day: "Wednesday – Thursday", time: "5:30 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
  { day: "Sunday", time: "5:00 PM – 9:30 PM" },
]

const eventCoordinator = {
  name: "Isabelle Moreau",
  title: "Director of Private Events",
  email: "events@luminabistro.com",
  phone: "+1 (212) 555-0174",
  note: "Available Monday–Friday, 10:00 AM – 6:00 PM EST. For urgent event inquiries, please call directly.",
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", party: "", notes: "" })
  const [resSubmitted, setResSubmitted] = useState(false)
  const [resForm, setResForm] = useState({ name: "", email: "", phone: "", date: "", time: "", party: "2" })

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact & Reservations
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Whether you're planning a table for two or an unforgettable private event, our team is here to make it extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                    <p className="text-foreground font-medium">142 West Harlow Street</p>
                    <p className="text-muted-foreground text-sm">New York, NY 10013</p>
                    <p className="text-muted-foreground text-sm">TriBeCa District</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Reservations</p>
                    <p className="text-foreground font-medium">+1 (212) 555-0142</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">General Inquiries</p>
                    <p className="text-foreground font-medium">hello@luminabistro.com</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <AtSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Follow Us</p>
                    <p className="text-foreground font-medium">@luminabistro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-foreground text-base flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Dining Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{day}</span>
                    <span className={`font-medium ${time === "Closed" ? "text-muted-foreground/50" : "text-foreground"}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Event Coordinator */}
            <Card className="bg-card border-primary/30">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle className="text-foreground text-base">Private Events</CardTitle>
                  <Badge className="bg-primary/20 text-primary border-0 text-xs">Direct Contact</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">{eventCoordinator.name}</p>
                  <p className="text-sm text-muted-foreground">{eventCoordinator.title}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                    <span className="text-foreground">{eventCoordinator.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    <span className="text-foreground">{eventCoordinator.phone}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground border-t border-border pt-3">{eventCoordinator.note}</p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Reservation Widget */}
            <Card className="bg-card border-border">
              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Reserve a Table
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  For parties of 1–8. For larger groups, please use our private dining inquiry below.
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                {!resSubmitted ? (
                  <form onSubmit={handleResSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Full Name</Label>
                        <Input
                          required
                          placeholder="Jane Smith"
                          value={resForm.name}
                          onChange={(e) => setResForm({ ...resForm, name: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Email</Label>
                        <Input
                          required
                          type="email"
                          placeholder="jane@example.com"
                          value={resForm.email}
                          onChange={(e) => setResForm({ ...resForm, email: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Phone</Label>
                        <Input
                          required
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={resForm.phone}
                          onChange={(e) => setResForm({ ...resForm, phone: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Date</Label>
                        <Input
                          required
                          type="date"
                          value={resForm.date}
                          onChange={(e) => setResForm({ ...resForm, date: e.target.value })}
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Party Size</Label>
                        <Input
                          required
                          type="number"
                          min="1"
                          max="8"
                          value={resForm.party}
                          onChange={(e) => setResForm({ ...resForm, party: e.target.value })}
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm w-full sm:w-auto"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Request Reservation
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-4 py-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Reservation Request Sent!</p>
                      <p className="text-sm text-muted-foreground">We'll confirm your table at {resForm.email} within a few hours.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Private Event Inquiry */}
            <Card className="bg-card border-border">
              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Wine className="h-5 w-5 text-primary" />
                  Private Event Inquiry
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Tell us about your event and our coordinator will be in touch within one business day.
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                {!submitted ? (
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Full Name</Label>
                        <Input
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Email</Label>
                        <Input
                          required
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Phone</Label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-foreground text-sm">Preferred Event Date</Label>
                        <Input
                          required
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-foreground text-sm">Estimated Guest Count</Label>
                      <Input
                        required
                        type="number"
                        min="1"
                        max="100"
                        placeholder="e.g. 25"
                        value={form.party}
                        onChange={(e) => setForm({ ...form, party: e.target.value })}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-foreground text-sm">Event Details & Special Requests</Label>
                      <Textarea
                        placeholder="Tell us about your occasion, any dietary restrictions, preferred space, or other special requirements..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm w-full sm:w-auto"
                      size="lg"
                    >
                      Send Event Inquiry
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-4 py-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Inquiry Submitted!</p>
                      <p className="text-sm text-muted-foreground">
                        Thank you, {form.name}. Isabelle will be in touch at {form.email} within one business day.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
