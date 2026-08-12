import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Leaf, Flame, Award } from "lucide-react"

const dinnerMenu = {
  sections: [
    {
      name: "Amuse-Bouche",
      items: [
        { name: "Daily Composition", description: "Chef's single-bite welcome, changes nightly", price: null, tag: null },
      ],
    },
    {
      name: "First Course",
      items: [
        { name: "Yellowfin Tuna Crudo", description: "Yuzu kosho, avocado cream, micro shiso, toasted sesame oil", price: 24, tag: "signature" },
        { name: "Foie Gras Torchon", description: "Brioche, compressed pear, candied walnut, aged balsamic", price: 32, tag: null },
        { name: "Roasted Beet & Burrata", description: "Pistachio dukkah, blood orange vinaigrette, fresh herbs", price: 19, tag: "vegetarian" },
        { name: "Lobster Bisque", description: "Cognac cream, tarragon oil, brioche croutons", price: 22, tag: null },
      ],
    },
    {
      name: "Second Course",
      items: [
        { name: "Handmade Tagliatelle", description: "Black truffle butter, aged Parmigiano-Reggiano, chives", price: 38, tag: "vegetarian" },
        { name: "Butter-Poached Langoustines", description: "Saffron risotto, fennel confit, shellfish bisque", price: 48, tag: "signature" },
      ],
    },
    {
      name: "Main Course",
      items: [
        { name: "A5 Wagyu Striploin", description: "Pommes dauphine, bone marrow butter, sauce bordelaise, watercress", price: 98, tag: "signature" },
        { name: "Dry-Aged Duck Breast", description: "Turnip purée, cherry gastrique, hazelnuts, micro arugula", price: 58, tag: null },
        { name: "Butter-Basted Halibut", description: "Pea cream, spring onion, lemon caper brown butter, radish", price: 54, tag: null },
        { name: "Roasted Cauliflower Royale", description: "Cauliflower cream, golden raisin agrodolce, almonds, saffron", price: 42, tag: "vegetarian" },
      ],
    },
    {
      name: "Dessert",
      items: [
        { name: "Valrhona Chocolate Soufflé", description: "Crème anglaise, salted caramel ice cream", price: 18, tag: "signature" },
        { name: "Seasonal Fruit Tart", description: "Pastry cream, honey glaze, candied zest", price: 14, tag: "vegetarian" },
        { name: "Cheese Selection", description: "Three artisan cheeses, seasonal accompaniments, honeycomb", price: 24, tag: null },
      ],
    },
  ],
}

const wineList = {
  sections: [
    {
      name: "Champagne & Sparkling",
      items: [
        { name: "Krug Grande Cuvée, NV", description: "Champagne, France", price: 38, glass: true },
        { name: "Louis Roederer Cristal, 2015", description: "Champagne, France", price: 95, glass: false },
        { name: "Ca' del Bosco Franciacorta Prestige, NV", description: "Lombardy, Italy", price: 22, glass: true },
      ],
    },
    {
      name: "White Wines",
      items: [
        { name: "Domaine Leflaive Puligny-Montrachet, 2021", description: "Burgundy, France — Chardonnay", price: 34, glass: true },
        { name: "Dönnhoff Niederhäuser Hermannshöhle Riesling GG, 2020", description: "Nahe, Germany — Riesling", price: 28, glass: true },
        { name: "Gaja Gaia & Rey Langhe Chardonnay, 2019", description: "Piedmont, Italy — Chardonnay", price: 65, glass: false },
        { name: "Clos Henri Marlborough Sauvignon Blanc, 2022", description: "Marlborough, New Zealand", price: 18, glass: true },
      ],
    },
    {
      name: "Red Wines",
      items: [
        { name: "Château Pichon Baron, 2018", description: "Pauillac, Bordeaux, France — Cabernet Sauvignon", price: 48, glass: true },
        { name: "Screaming Eagle Cabernet Sauvignon, 2017", description: "Napa Valley, California", price: 395, glass: false },
        { name: "Giuseppe Quintarelli Amarone, 2016", description: "Veneto, Italy — Corvina Blend", price: 85, glass: false },
        { name: "Sine Qua Non Syrah 'The Inaugural', 2019", description: "California", price: 55, glass: false },
        { name: "Domaine de la Romanée-Conti, 2018", description: "Burgundy, France — Pinot Noir", price: 850, glass: false },
      ],
    },
    {
      name: "Dessert & Fortified",
      items: [
        { name: "Château d'Yquem Sauternes, 2015", description: "Bordeaux, France — 375ml", price: 145, glass: false },
        { name: "Taylor Fladgate Vintage Port, 2011", description: "Douro Valley, Portugal", price: 24, glass: true },
      ],
    },
  ],
}

const privateDiningMenu = {
  tiers: [
    {
      name: "3-Course Signature",
      price: 85,
      description: "A refined introduction to Lumina's culinary philosophy.",
      courses: [
        { course: "First", options: ["Tuna Crudo", "Beet & Burrata", "Soup du Jour"] },
        { course: "Main", options: ["Butter-Basted Halibut", "Duck Breast", "Cauliflower Royale"] },
        { course: "Dessert", options: ["Seasonal Tart", "Cheese Selection", "Chocolate Pot de Crème"] },
      ],
    },
    {
      name: "5-Course Tasting",
      price: 125,
      description: "An extended journey through our seasonal repertoire.",
      courses: [
        { course: "Amuse-Bouche", options: ["Chef's Nightly Selection"] },
        { course: "First", options: ["Tuna Crudo", "Foie Gras Torchon", "Lobster Bisque"] },
        { course: "Second", options: ["Tagliatelle al Tartufo", "Langoustines"] },
        { course: "Main", options: ["A5 Wagyu", "Halibut", "Duck Breast", "Cauliflower Royale"] },
        { course: "Dessert", options: ["Chocolate Soufflé", "Fruit Tart", "Cheese"] },
      ],
    },
    {
      name: "Chef's Reserve",
      price: 175,
      description: "The full expression of our kitchen's ambition — available by request only.",
      courses: [
        { course: "Amuse-Bouche", options: ["Chef's Selection"] },
        { course: "First", options: ["Caviar Service", "Foie Gras", "Langoustine Crudo"] },
        { course: "Second", options: ["Truffle Tagliatelle", "Langoustines Gratinée"] },
        { course: "Third (Supplemental)", options: ["Wagyu A5 Supplement", "Black Truffle Supplement"] },
        { course: "Main", options: ["Wagyu Striploin", "Dover Sole Meunière", "Bespoke Vegetarian"] },
        { course: "Pre-Dessert", options: ["Palate Cleanser"] },
        { course: "Dessert", options: ["Chocolate Soufflé", "Mignardises Collection"] },
      ],
    },
  ],
}

function TagBadge({ tag }: { tag: string | null }) {
  if (!tag) return null
  if (tag === "signature")
    return (
      <Badge className="bg-primary/20 text-primary border-0 text-xs gap-1">
        <Award className="h-2.5 w-2.5" />
        Signature
      </Badge>
    )
  if (tag === "vegetarian")
    return (
      <Badge className="bg-green-900/40 text-green-400 border-0 text-xs gap-1">
        <Leaf className="h-2.5 w-2.5" />
        Vegetarian
      </Badge>
    )
  return null
}

export function MenusPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Lumina Bistro</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Menus</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Seasonal menus rooted in classical technique, elevated with modern sensibility. All dishes reflect market availability and change regularly.
          </p>
        </div>

        <Tabs defaultValue="dinner" className="space-y-8">
          <TabsList className="bg-secondary border border-border w-full justify-start h-auto p-1 gap-1">
            <TabsTrigger
              value="dinner"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tracking-wider uppercase text-xs px-6 py-2.5"
            >
              <Flame className="h-3.5 w-3.5 mr-2" />
              Dinner
            </TabsTrigger>
            <TabsTrigger
              value="wine"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tracking-wider uppercase text-xs px-6 py-2.5"
            >
              Wine List
            </TabsTrigger>
            <TabsTrigger
              value="private"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tracking-wider uppercase text-xs px-6 py-2.5"
            >
              Private Dining Prix-Fixe
            </TabsTrigger>
          </TabsList>

          {/* Dinner Menu */}
          <TabsContent value="dinner" className="space-y-8">
            {dinnerMenu.sections.map((section) => (
              <div key={section.name}>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-primary text-xs tracking-widest uppercase font-semibold">{section.name}</p>
                  <Separator className="flex-1" />
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 group">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <TagBadge tag={item.tag} />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      {item.price && (
                        <span className="text-primary font-semibold text-sm shrink-0 mt-0.5">${item.price}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              Please inform your server of any dietary restrictions or allergies. Menu items are subject to change based on seasonal availability. Consuming raw or undercooked proteins may increase your risk of foodborne illness.
            </p>
          </TabsContent>

          {/* Wine List */}
          <TabsContent value="wine" className="space-y-8">
            {wineList.sections.map((section) => (
              <div key={section.name}>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-primary text-xs tracking-widest uppercase font-semibold">{section.name}</p>
                  <Separator className="flex-1" />
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-0.5">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-primary font-semibold">${item.price}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.glass ? "glass / bottle" : "bottle"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              Our sommelier is pleased to assist with pairings and cellar selections. Corkage fee: $45 per bottle for wines not on our list.
            </p>
          </TabsContent>

          {/* Private Dining Prix-Fixe */}
          <TabsContent value="private" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {privateDiningMenu.tiers.map((tier, i) => (
                <Card
                  key={tier.name}
                  className={`bg-card border-border ${i === 1 ? "border-primary/50 shadow-[0_0_30px_rgba(217,119,6,0.1)]" : ""}`}
                >
                  {i === 1 && (
                    <div className="bg-primary text-primary-foreground text-xs tracking-widest uppercase text-center py-1.5 rounded-t-lg font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                      <p className="text-3xl font-bold text-primary mb-2">${tier.price}<span className="text-sm text-muted-foreground font-normal">/person</span></p>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                    <Separator className="mb-4" />
                    <div className="space-y-3">
                      {tier.courses.map((course) => (
                        <div key={course.course}>
                          <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-1">{course.course}</p>
                          <p className="text-sm text-muted-foreground">{course.options.join(" · ")}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              Private dining menus are selected in advance. All guests at the table must choose from the same tier. Custom menus available for the Chef's Reserve tier. Add beverage packages from $45/person.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
