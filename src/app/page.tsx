import HomeContent from "@/components/HomeContent";

// Main entry point for Fortune
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Fortune YSWS",
        url: "https://fortune-ysws.vercel.app",
        sameAs: ["https://hackclub.com"],
      },
      {
        "@type": "WebSite",
        name: "Fortune YSWS",
        url: "https://fortune-ysws.vercel.app",
        description:
          "A Hack Club YSWS for teen founders to learn business, build products, and ship useful websites.",
      },
      {
        "@type": "Event",
        name: "Fortune YSWS",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        description:
          "A virtual Hack Club program where teen founders learn business and build a real product website.",
        organizer: {
          "@type": "Organization",
          name: "Hack Club",
          url: "https://hackclub.com",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeContent />
    </>
  );
}
