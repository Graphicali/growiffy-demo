import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Users, ChefHat, Wine, Sparkles, Calculator, Calendar, CheckCircle2 } from "lucide-react"

const ROOMS = [
  {
    id: "chefs-table",
    name: "Chef's Table",
    capacity: 12,
    minCheck: 2000,
    description: "Intimate open-kitchen experience",
    icon: ChefHat,
  },
  {
    id: "amber-lounge",
    name: "The Amber Lounge",
    capacity: 30,
    minCheck: 5000,
    description: "Sophisticated private lounge",
    icon: Wine,
  },
  {
    id: "buyout",
    name: "Full Restaurant Buyout",
    capacity: 100,
    minCheck: 15000,
    description: "Exclusive full venue access",
    icon: Sparkles,
  },
]

const MENUS = [
  { id: "signature", name: "3-Course Signature", price: 85, description: "Seasonal starters, entrée & dessert" },
  { id: "tasting", name: "5-Course Tasting", price: 125, description: "Extended culinary journey" },
  { id: "reserve", name: "Chef's Reserve", price: 175, description: "Full tasting with supplemental courses" },
]

const BEVERAGES = [
  { id: "open-bar", name: "Standard Open Bar", price: 45, description: "Beer, wine & spirits" },
  { id: "sommelier", name: "Sommelier Wine Pairing", price: 75, description: "Curated wine per course" },
  { id: "premium", name: "Premium Reserve Bar", price: 105, description: "Top-shelf spirits & rare wines" },
]

const ADDONS = [
  { id: "canapes", name: "Passed Canapés on Arrival", price: 20, perPerson: true },
  { id: "printed-menus", name: "Custom Printed Menus & Place Cards", price: 150, perPerson: false },
  { id: "dessert-station", name: "Late Night Dessert Station", price: 300, perPerson: false },
]

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

interface FormData {
  name: string
  email: string
  phone: string
  date: string
}

export function CalculatorPage() {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0])
  const [guests, setGuests] = useState(6)
  const [selectedMenu, setSelectedMenu] = useState(MENUS[0])
  const [selectedBeverage, setSelectedBeverage] = useState(BEVERAGES[0])
  const [addons, setAddons] = useState<Record<string, boolean>>({})
  const [dialogOpen, setDialogOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", date: "" })

  const handleRoomSelect = (room: typeof ROOMS[0]) => {
    setSelectedRoom(room)
    setGuests(Math.min(guests, room.capacity))
  }

  const toggleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Price calculations
  const foodSubtotal = guests * selectedMenu.price
  const bevSubtotal = guests * selectedBeverage.price
  const addonTotal = ADDONS.reduce((sum, a) => {
    if (!addons[a.id]) return sum
    return sum + (a.perPerson ? a.price * guests : a.price)
  }, 0)
  const fbSubtotal = foodSubtotal + bevSubtotal + addonTotal
  const roomMinimum = Math.max(0, selectedRoom.minCheck - fbSubtotal)
  const gratuity = fbSubtotal * 0.2
  const total = fbSubtotal + Math.max(0, selectedRoom.minCheck - fbSubtotal) + gratuity

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-6">
            <Calculator className="h-3.5 w-3.5" />
            Private Dining Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Build Your Perfect Event
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Customize your private dining experience and receive an instant estimated investment for your special occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Configuration */}
          <div className="lg:col-span-2 space-y-6">

            {/* Room Selection */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Select Your Space
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {ROOMS.map((room) => {
                  const Icon = room.icon
                  const isSelected = selectedRoom.id === room.id
                  return (
                    <button
                      key={room.id}
                      onClick={() => handleRoomSelect(room)}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40 hover:bg-secondary/50"
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{room.name}</p>
                          {isSelected && (
                            <Badge className="bg-primary text-primary-foreground text-xs">Selected</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{room.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Capacity</p>
                        <p className="font-semibold text-foreground">Up to {room.capacity}</p>
                        <p className="text-xs text-primary">{fmt(room.minCheck)} min.</p>
                      </div>
                    </button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Guest Count */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Guest Count
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">{guests}</span>
                    <span className="text-muted-foreground text-sm">guests</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Slider
                  min={2}
                  max={selectedRoom.capacity}
                  step={1}
                  value={[guests]}
                  onValueChange={([v]) => setGuests(v)}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>2 guests</span>
                  <span>{selectedRoom.capacity} guests (max for {selectedRoom.name})</span>
                </div>
              </CardContent>
            </Card>

            {/* Prix-Fixe Menu */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                  <ChefHat className="h-5 w-5 text-primary" />
                  Prix-Fixe Menu Tier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {MENUS.map((menu) => {
                  const isSelected = selectedMenu.id === menu.id
                  return (
                    <button
                      key={menu.id}
                      onClick={() => setSelectedMenu(menu)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all text-left ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40 hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-4 w-4 rounded-full border-2 transition-all ${
                          isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                        }`} />
                        <div>
                          <p className="font-semibold text-foreground">{menu.name}</p>
                          <p className="text-sm text-muted-foreground">{menu.description}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-primary shrink-0 ml-4">${menu.price}<span className="text-xs text-muted-foreground font-normal">/pp</span></span>
                    </button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Beverage Package */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                  <Wine className="h-5 w-5 text-primary" />
                  Beverage Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {BEVERAGES.map((bev) => {
                  const isSelected = selectedBeverage.id === bev.id
                  return (
                    <button
                      key={bev.id}
                      onClick={() => setSelectedBeverage(bev)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all text-left ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40 hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-4 w-4 rounded-full border-2 transition-all ${
                          isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                        }`} />
                        <div>
                          <p className="font-semibold text-foreground">{bev.name}</p>
                          <p className="text-sm text-muted-foreground">{bev.description}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-primary shrink-0 ml-4">${bev.price}<span className="text-xs text-muted-foreground font-normal">/pp</span></span>
                    </button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Add-Ons */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Optional Add-Ons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {ADDONS.map((addon) => (
                  <div
                    key={addon.id}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                      addons[addon.id]
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/30"
                    }`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={addon.id}
                        checked={!!addons[addon.id]}
                        onCheckedChange={() => toggleAddon(addon.id)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label htmlFor={addon.id} className="cursor-pointer">
                        <p className="font-medium text-foreground">{addon.name}</p>
                      </Label>
                    </div>
                    <span className="text-primary font-semibold shrink-0 ml-4">
                      +{fmt(addon.perPerson ? addon.price : addon.price)}
                      <span className="text-xs text-muted-foreground font-normal">
                        {addon.perPerson ? "/pp" : " flat"}
                      </span>
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right: Price Summary */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-card border-primary/30 shadow-2xl">
              <CardHeader className="pb-4 border-b border-border">
                <CardTitle className="text-foreground text-lg">Estimated Investment</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {guests} guests · {selectedRoom.name}
                </p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {/* Line items */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-foreground">{selectedMenu.name}</p>
                      <p className="text-xs text-muted-foreground">{guests} × ${selectedMenu.price}</p>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{fmt(foodSubtotal)}</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-foreground">{selectedBeverage.name}</p>
                      <p className="text-xs text-muted-foreground">{guests} × ${selectedBeverage.price}</p>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{fmt(bevSubtotal)}</span>
                  </div>

                  {ADDONS.filter((a) => addons[a.id]).map((addon) => (
                    <div key={addon.id} className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-foreground">{addon.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {addon.perPerson ? `${guests} × $${addon.price}` : "Flat fee"}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {fmt(addon.perPerson ? addon.price * guests : addon.price)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">F&B Subtotal</span>
                  <span className="text-sm font-semibold text-foreground">{fmt(fbSubtotal)}</span>
                </div>

                {roomMinimum > 0 && (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">Room Rental Minimum</p>
                      <p className="text-xs text-muted-foreground/70">
                        ({fmt(selectedRoom.minCheck)} min. − {fmt(fbSubtotal)} F&B)
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{fmt(roomMinimum)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">20% Gratuity & Service</span>
                  <span className="text-sm font-semibold text-foreground">{fmt(gratuity)}</span>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Total Estimate</span>
                  <span className="text-2xl font-bold text-primary">{fmt(total)}</span>
                </div>

                <p className="text-xs text-muted-foreground">
                  Final pricing may vary based on menu changes, tax, and event details. A deposit of 25% is required to hold your date.
                </p>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm"
                  size="lg"
                  onClick={() => { setDialogOpen(true); setSubmitted(false) }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Request Date Availability
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground text-xl">Request Date Availability</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Submit your details and our events coordinator will confirm availability within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Your Estimated Event</p>
                <p className="text-sm text-foreground font-medium">
                  {guests} guests · {selectedRoom.name}
                </p>
                <p className="text-sm text-primary font-bold">{fmt(total)} estimated</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label className="text-foreground text-sm">Email Address</Label>
                  <Input
                    required
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-foreground text-sm">Phone Number</Label>
                  <Input
                    required
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
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm"
                  size="lg"
                >
                  Submit Inquiry
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <DialogTitle className="text-foreground text-xl mb-2">Inquiry Received!</DialogTitle>
              <DialogDescription className="text-muted-foreground mb-6">
                Thank you, {form.name}. Our events coordinator will reach out to {form.email} within 24 hours to confirm your date and discuss your event details.
              </DialogDescription>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
