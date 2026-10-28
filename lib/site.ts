export const site = {
   name: "SVN Group",
   tagline: "Bricks & Wheelbarrows",
   description:
      "SVN Group is Nigeria's leading distributor of quality facing bricks and wheelbarrow pans, supplying builders, contractors and homeowners nationwide.",
   phone: "+234 803 316 6418",
   phoneHref: "tel:+2348033166418",
   whatsappHref: `https://wa.me/2348033166418?text=${encodeURIComponent(
      "Hello SVN Group, I'd like to make an enquiry about your products."
   )}`,
   email: "svnbricksltd@gmail.com",
   hours: "Mon – Sat, 9:00am – 5:00pm",
   offices: [
      {
         name: "Head Office",
         address:
            "Block D2 291, HFP Eastline Shopping Complex, Lekki Expressway, Ajah, Lagos",
      },
      {
         name: "Owerri Office",
         address: "KM5 Owerri–Aba Road, Naze, Owerri, Imo State",
      },
   ],
};

export const navLinks = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About" },
   { href: "/products", label: "Products" },
   { href: "/gallery", label: "Projects" },
   { href: "/contact", label: "Contact" },
];

export type Product = {
   slug: string;
   name: string;
   category: "Facing Bricks" | "Wheelbarrow Pans";
   image: string;
   summary: string;
   description: string;
   uses: string[];
   colors?: ProductColor[];
};

export type ProductColor = {
   name: string;
   hex: string;
   finish?: "Smooth" | "Textured";
   /** Photo of this colour on its own; shown when its swatch is selected. */
   image?: string;
};

export const productCategories = [
   {
      slug: "facing-bricks",
      name: "Facing Bricks" as const,
      title: "Facing bricks in every style and colour",
      description:
         "Premium facing bricks for façades, fences, columns and feature walls — choose the finish that suits your design.",
   },
   {
      slug: "wheelbarrow-pans",
      name: "Wheelbarrow Pans" as const,
      title: "Trusted wheelbarrow pan brands",
      description:
         "Strong galvanised steel pans from the brands builders know, available singly or in bulk.",
   },
];

export const products: Product[] = [
   {
      slug: "american-bricks",
      name: "American Bricks",
      category: "Facing Bricks",
      image: "/images/products/americanbricks.png",
      summary:
         "Clean-lined facing bricks with a fine-grained finish, available in six colours.",
      description:
         "American bricks give buildings a crisp, contemporary finish. Their even size and colour make them quick to lay and ideal for residential estates, commercial fronts and boundary walls.",
      uses: ["Building façades", "Fences & gate pillars", "Feature walls"],
      colors: [
         { name: "Red", hex: "#9b4a32" },
         { name: "Cream", hex: "#e8d9a8" },
         { name: "Buff", hex: "#d6a679" },
         { name: "Brown", hex: "#8a3f24" },
         { name: "Grey", hex: "#8c8f93" },
         { name: "Terracotta", hex: "#b8705a" },
      ],
   },
   {
      slug: "south-african-bricks",
      name: "South African Bricks",
      category: "Facing Bricks",
      image: "/images/products/southafricanbricks.png",
      summary:
         "Rustic, multi-tone bricks with a rich speckled texture for a classic, premium look.",
      description:
         "South African bricks are loved for their rugged texture and natural blends of red, brown, grey and charcoal. No two bricks are quite the same, giving duplexes, mansions and landmark projects a timeless character.",
      uses: ["Duplexes & mansions", "Columns & porches", "Commercial buildings"],
      colors: [
         { name: "Smoked Red", hex: "#7a4a3a" },
         { name: "Rustic Orange", hex: "#b4552f" },
         { name: "Grey Blend", hex: "#8a8079" },
         { name: "Dark Flashed", hex: "#4a2f25" },
         { name: "Charcoal Tan", hex: "#a07a62" },
      ],
   },
   {
      slug: "spanish-bricks",
      name: "Spanish Bricks",
      category: "Facing Bricks",
      image: "/images/products/spanish.png",
      summary:
         "Sleek modern bricks in smooth and textured finishes, from classic red to bold black and white.",
      description:
         "Spanish bricks offer a clean, architectural look with a choice of smooth and textured faces. Their wide colour range — from dark ash to pure white — makes them a designer favourite for modern homes and interiors.",
      uses: ["Modern façades", "Interior feature walls", "Accent bands & trims"],
      colors: [
         { name: "Brown", hex: "#9b7068", finish: "Smooth", image: "/images/products/spanish/brown.png" },
         { name: "Dark Ash", hex: "#4f4f51", finish: "Textured", image: "/images/products/spanish/darkash.png" },
         { name: "Peach", hex: "#dea88d", finish: "Textured", image: "/images/products/spanish/peach.png" },
         { name: "Milk White", hex: "#e9e2d0", finish: "Smooth", image: "/images/products/spanish/milkwhite.png" },
         { name: "White", hex: "#eceef2", finish: "Textured", image: "/images/products/spanish/white.png" },
         { name: "Brown Red", hex: "#c5745e", finish: "Smooth", image: "/images/products/spanish/brownred.png" },
      ],
   },
   {
      slug: "ericson",
      name: "Ericson",
      category: "Wheelbarrow Pans",
      image: "/images/products/ericson.png",
      summary:
         "A dependable galvanised wheelbarrow pan for everyday construction work.",
      description:
         "The Ericson pan is a popular all-rounder on Nigerian building sites. Its deep, rounded galvanised body carries sand, gravel, blocks and wet concrete with ease.",
      uses: ["Construction sites", "Hardware resellers", "Farms & landscaping"],
   },
   {
      slug: "kms",
      name: "KMS",
      category: "Wheelbarrow Pans",
      image: "/images/products/kms.png",
      summary:
         "Heavy-duty galvanised pan built for demanding, high-volume site use.",
      description:
         "KMS pans are built for contractors who need strength day after day. The heavy galvanised steel body resists rust and denting under constant loading.",
      uses: ["Contractors & builders", "Concrete & mortar work", "Bulk site supply"],
   },
   {
      slug: "omega",
      name: "Omega",
      category: "Wheelbarrow Pans",
      image: "/images/products/omega.png",
      summary:
         "A strong, great-value galvanised pan for builders, farms and resellers.",
      description:
         "Omega pans combine solid galvanised construction with excellent value, making them a favourite with hardware stores and buyers ordering in quantity.",
      uses: ["Hardware stores", "Farms & gardens", "General site work"],
   },
];

export const projects = [
   { src: "/images/image1.jpeg", alt: "Duplex with brick-clad pillars and fence" },
   { src: "/images/image2.jpeg", alt: "Three-storey apartment block in red facing bricks" },
   { src: "/images/image3.jpeg", alt: "Brick-clad portico with balcony" },
   { src: "/images/image5.jpeg", alt: "Bungalow finished in tan facing bricks" },
   { src: "/images/image6.jpeg", alt: "Two-storey home with multi-tone brick finish" },
   { src: "/images/image7.jpeg", alt: "Brick façade under construction" },
   { src: "/images/image8.jpeg", alt: "Detached house finished in red facing bricks" },
   { src: "/images/bg.jpg", alt: "Modern home with red brick boundary wall" },
];
