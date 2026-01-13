import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "How To Dress",
  description: "Get inspired by our dress guide and styling tips for the celebration."
};

export default function HowToDressPage() {
  return (
    <ArticleLayout
      title="How To Dress"
      excerpt="Get inspired by our dress guide and styling tips for the celebration."
      image="/img/traditions/dress.jpg"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Dress Code & Styling Guide
          </h2>
          <p>
            Looking your best at a wedding celebration is about comfort, respect, and celebrating with the couple. 
            Whether you&apos;re attending a ceremony honoring Indian traditions, Mexican customs, or a fusion celebration, 
            this guide will help you choose the perfect outfit.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            For the Indian Ceremony
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Women&apos;s Attire
              </h3>
              <p>
                Consider wearing a traditional saree, salwar kameez, or lehenga if you have them. 
                These garments are not only beautiful but show respect for the traditions being celebrated. 
                Colorful fabrics in jewel tones, gold, or vibrant patterns are perfect. Don&apos;t forget complementary jewelry 
                like bangles, necklaces, or bindis if you&apos;re comfortable wearing them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Men&apos;s Attire
              </h3>
              <p>
                A traditional kurta with a dhoti or formal pants creates an elegant look. Alternatively, 
                a well-tailored suit in a neutral or jewel tone paired with a traditional shawl or stole works beautifully. 
                Consider adding a turban or traditional headpiece if you wish to fully embrace the cultural aesthetic.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Accessories & Jewelry
              </h3>
              <p>
                Statement jewelry is encouraged! Bangles, earrings, necklaces, and rings all add to the festive spirit. 
                Henna is also a wonderful addition if you&apos;d like to participate in the celebration.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            For the Mexican Celebration
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Women&apos;s Attire
              </h3>
              <p>
                A beautiful dress in vibrant colors is perfect for a Mexican celebration. Consider dresses with embroidered details, 
                folk-inspired patterns, or elegant fabrics like silk or satin. Floral prints and bold colors are encouraged. 
                Comfortable shoes are important as there will be lots of dancing!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Men&apos;s Attire
              </h3>
              <p>
                A well-fitted suit or dressy pants with a guayabera shirt (traditional Mexican shirt) is an excellent choice. 
                You could also opt for a traditional charro suit if you have one. Keep colors classic but don&apos;t be afraid 
                to add a touch of personality with your accessories.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Accessories & Flowers
              </h3>
              <p>
                Fresh flowers worn in your hair or as a boutonniere add a festive touch. Colorful scarves, shawls, or rebozos 
                are both practical and beautifully cultural. Don&apos;t hesitate to wear bold jewelry or accessories!
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            General Tips for All Celebrations
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Comfort First:</strong> You&apos;ll be celebrating for hours, so wear something you feel comfortable moving around in.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Appropriate Footwear:</strong> Choose shoes suitable for both the ceremony and dancing&mdash;you may be removing them during certain parts of the celebration.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Respect the Traditions:</strong> Research dress codes for specific ceremonies to show respect and appreciation.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Color Matters:</strong> White and black are traditionally avoided, except by the bride. Vibrant, colorful clothing is encouraged.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Layers Are Smart:</strong> Ceremonies may be indoors, outdoors, or move between venues. Bring a shawl or jacket.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
              <span><strong>Express Yourself:</strong> While respecting traditions, let your personal style shine through!</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            When in Doubt
          </h2>
          <p>
            If you&apos;re unsure about what to wear, don&apos;t hesitate to reach out! We&apos;re happy to provide more specific guidance 
            about particular events or ceremonies. The most important thing is that you feel confident and comfortable celebrating with us.
          </p>
        </section>
      </div>
    </ArticleLayout>
  );
}
