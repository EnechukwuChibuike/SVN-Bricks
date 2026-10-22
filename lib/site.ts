export const site = {
   name: "SVN Group",
   tagline: "Bricks & Wheelbarrows",
   description:
      "SVN Group is Nigeria's leading distributor of quality facing bricks and wheelbarrow pans, supplying builders, contractors and homeowners nationwide.",
   phone: "+234 803 316 6418",
   phoneHref: "tel:+2348033166418",
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

export const products = [
   {
      slug: "american-bricks",
      name: "American Bricks",
      category: "Facing Bricks",
      image: "/images/americanbricks.jpg",
      summary:
         "Clean-lined facing bricks in warm earth tones for modern façades, fences and feature walls.",
      description:
         "Our American bricks give buildings a crisp, contemporary finish. Uniform in size and colour, they lay quickly and keep their look for years, making them a favourite for residential estates, commercial fronts and boundary walls.",
      uses: ["Building façades", "Fences & gate pillars", "Feature & interior walls"],
   },
   {
      slug: "south-african-bricks",
      name: "South African Bricks",
      category: "Facing Bricks",
      image: "/images/southAfricanBricks.jpg",
      summary:
         "Richly textured, multi-tone bricks that bring a classic, premium character to any build.",
      description:
         "South African bricks are known for their speckled, multi-tone texture and natural depth of colour. They deliver a timeless, high-end finish on duplexes, mansions and landmark projects — with excellent durability in Nigeria's climate.",
      uses: ["Duplexes & mansions", "Columns & porches", "Commercial buildings"],
   },
   {
      slug: "wheelbarrow-pans",
      name: "Wheelbarrow Pans",
      category: "Site Equipment",
      image: "/images/s-l500.jpg",
      summary:
         "Heavy-duty galvanised wheelbarrow pans built for daily use on busy construction sites.",
      description:
         "Our galvanised steel wheelbarrow pans resist rust and stand up to sand, gravel, blocks and wet concrete day after day. Available for retail buyers and in bulk for contractors, hardware stores and resellers.",
      uses: ["Construction sites", "Hardware stores & resellers", "Farms & landscaping"],
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
