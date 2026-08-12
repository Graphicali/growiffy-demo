import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Star,
  Users,
  ChefHat,
  Wine,
  Clock,
  MapPin,
  Phone,
} from "lucide-react"

const spaces = [
  {
    title: "Chef's Table",
    capacity: "Up to 12 guests",
    description:
      "An intimate front-row seat to culinary artistry. Positioned at the heart of our open kitchen, the Chef's Table offers an immersive, curated experience unlike any other.",
    image: "/chefs-table.webp",
    tags: ["Intimate", "Immersive", "Exclusive"],
  },
  {
    title: "The Amber Lounge",
    capacity: "Up to 30 guests",
    description:
      "A sophisticated private lounge wrapped in deep velvet and warm amber light. Perfect for corporate dinners, milestone celebrations, or an unforgettable evening with your closest circle.",
    image: "/amber-lounge.webp",
    tags: ["Semi-Private", "Versatile", "Elegant"],
  },
  {
    title: "Full Restaurant Buyout",
    capacity: "Up to 100 guests",
    description:
      "Transform Lumina Bistro entirely into your own. A grand buyout grants you exclusive access to our entire space, our full culinary team, and an evening that exists only for you.",
    image: "/buyout-event.webp",
    tags: ["Grand", "Exclusive", "Bespoke"],
  },
]

const highlights = [
  { icon: ChefHat, label: "Executive Chef", value: "Michelin Background" },
  { icon: Wine, label: "Wine Program", value: "800+ Selections" },
  { icon: Star, label: "Recognition", value: "AAA Four Diamond" },
  { icon: Clock, label: "Est.", value: "2019" },
]

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-restaurant.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary mb-6 tracking-widest uppercase text-xs px-4 py-1.5"
          >
            Modern Gastronomy & Private Events
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Where Every{" "}
            <span className="text-primary">Moment</span>
            <br />
            Becomes Memory
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Lumina Bistro & Private Dining crafts extraordinary experiences through seasonal cuisine, curated wines, and spaces designed for life's most meaningful occasions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm px-8"
            >
              <Link to="/calculator">
                Calculate Private Dining Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary tracking-wider uppercase text-sm px-8"
            >
              <Link to="/menus">Explore Our Menus</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/60" />
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Philosophy</p>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Cuisine as an Art Form
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Lumina, we believe that exceptional dining transcends food. It is the totality of atmosphere, service, and craft converging in a single, unforgettable moment. Our culinary team sources the finest seasonal ingredients to compose dishes that are as visually arresting as they are deeply satisfying.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our private dining program extends this philosophy into your most personal occasions—weddings, anniversaries, corporate milestones—with bespoke menus, dedicated service teams, and spaces tailored precisely to your vision.
            </p>
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <Link to="/menus">
                View Our Menus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/chefs-table.webp"
                alt="Chef's Table"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-2xl">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Reservations</p>
              <p className="text-sm font-semibold text-foreground">Wednesday – Sunday</p>
              <p className="text-sm text-muted-foreground">5:30 PM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Private Dining Spaces */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Private Events</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Three Distinct Spaces</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From an intimate chef's table experience to a full restaurant buyout, Lumina offers private dining environments for every occasion and group size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <Card
              key={space.title}
              className="bg-card border-border overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary tracking-wider uppercase">{space.capacity}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{space.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {space.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm px-10"
          >
            <Link to="/calculator">
              Calculate Your Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Plan Your Private Event?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Use our interactive calculator to get an instant estimated investment for your event, then connect with our event coordinator to confirm availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-sm"
            >
              <Link to="/calculator">Start Planning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border">
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Events Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-widest uppercase text-foreground">Lumina Bistro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>142 West Harlow Street, New York, NY 10013</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lumina Bistro & Private Dining
          </p>
        </div>
      </footer>
    </div>
  )
}
