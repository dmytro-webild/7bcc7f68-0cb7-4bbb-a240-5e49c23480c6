"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Sweet Delights"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Sweet Delights Bakery"
      description="Handcrafted with love, baked to perfection. Experience the taste of joy."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Order Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-delicious-bagels-with-crackers-cinnamon-macarons-cookies-white-desk-cake-biscuit-sweet-sugar-pie-cookie-crisp_140725-55874.jpg"
      showDimOverlay={false}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Story & Passion"
      description="At Sweet Delights, baking is more than just a process – it's an art form passed down through generations. We use only the finest ingredients to create unforgettable moments, one bite at a time. From classic pastries to custom cakes, every item tells a story of dedication and flavor."
      bulletPoints={[
        {
          title: "Freshly Baked Daily",
          description: "Every item is prepared fresh each morning for the ultimate taste.",
        },
        {
          title: "Finest Ingredients",
          description: "We source premium, natural ingredients for superior quality.",
        },
        {
          title: "Artisan Craftsmanship",
          description: "Our bakers combine traditional techniques with creative flair.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pumpkin-pie-making-assortment_23-2149055393.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "croissant",
          title: "Flaky Croissants",
          tags: [
            "Breakfast",
            "Pastry",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/stuffed-tasty-pastry-white-plate_114579-87974.jpg",
        },
        {
          id: "cupcakes",
          title: "Gourmet Cupcakes",
          tags: [
            "Dessert",
            "Celebration",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-rainbow-cupcakes-still-life_23-2150154571.jpg",
        },
        {
          id: "sourdough",
          title: "Artisan Sourdough",
          tags: [
            "Bread",
            "Healthy",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-slices-artisan-bread-lined-with-straw-pieces-fresh-homemade-sourdough-bread-wholesome-healthy-organic-food_166373-3257.jpg",
        },
      ]}
      title="Our Signature Treats"
      description="Discover a delightful array of pastries, cakes, and breads, all made with passion and precision."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "chocolate-cake",
          name: "Decadent Chocolate Cake",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-tasty-chocolate-cake-with-chocolate-chunks-baking-sheet_1220-6207.jpg",
        },
        {
          id: "blueberry-muffin",
          name: "Classic Blueberry Muffin",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/cupcakes-with-chocolate_1220-149.jpg",
        },
        {
          id: "baguette",
          name: "Crusty French Baguette",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bread-near-nuts-tools_23-2147852042.jpg",
        },
        {
          id: "cheesecake",
          name: "Creamy New York Cheesecake",
          price: "$38.00",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-blue-cheesecake-with-different-berries_171337-12442.jpg",
        },
      ]}
      title="Popular Picks"
      description="Our most beloved creations, baked fresh daily and ready to brighten your day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah L.",
          role: "Local Foodie",
          testimonial: "Sweet Delights makes the best croissants in town! They're perfectly flaky every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-hispanic-woman-standing-yellow-background-smiling-positive-doing-ok-sign-with-hand-fingers-successful-expression_839833-32513.jpg",
        },
        {
          id: "2",
          name: "Mark T.",
          role: "Coffee Shop Owner",
          testimonial: "Their sourdough bread is a consistent hit with my customers. Always fresh and delicious.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1652.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Event Planner",
          testimonial: "The custom cake for our event was stunning and tasted even better. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-girl-winter-knitted-clothes_158595-4142.jpg",
        },
        {
          id: "4",
          name: "David P.",
          role: "Daily Customer",
          testimonial: "I start every morning with a pastry from Sweet Delights. The staff are wonderful and the treats are divine.",
          imageSrc: "http://img.b2bpic.net/free-photo/teenage-girl-waiting-public-transportation-girl-bus-stop_169016-67294.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from our happy customers who love our freshly baked goods and warm service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer gluten-free options?",
          content: "Yes, we have a selection of delicious gluten-free breads and pastries. Please ask our staff for today's offerings.",
        },
        {
          id: "q2",
          title: "Can I place a custom cake order?",
          content: "Absolutely! We specialize in custom cakes for all occasions. Please contact us at least one week in advance to discuss your design and flavor preferences.",
        },
        {
          id: "q3",
          title: "Do you deliver?",
          content: "We offer local delivery within a 5-mile radius for orders over $30. Additional delivery fees may apply. You can also pick up your order in-store.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Visit Us or Order Ahead! We're here to make your day a little sweeter."
      buttons={[
        {
          text: "Get Directions",
          href: "https://maps.google.com/?q=Sweet+Delights+Bakery",
        },
        {
          text: "Call Us",
          href: "tel:+1234567890",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sweet Delights"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
