import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Indian Traditions",
  description: "Explore the rich traditions of Indian culture and wedding ceremonies."
};

export default function IndianTraditionsPage() {
  return (
    <ArticleLayout
      title="Indian Traditions"
      excerpt="Explore the rich and vibrant traditions of Indian culture and wedding ceremonies."
      image="/img/traditions/indian.jpg"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Significance of Indian Wedding Traditions
          </h2>
          <p>
            Indian weddings are a beautiful blend of spirituality, family values, and vibrant celebrations. 
            Each ceremony carries deep symbolic meaning that has been passed down through generations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Ceremonies
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Haldi
              </h3>
              <p>
                The Haldi ceremony involves applying turmeric paste to the bride and groom. 
                Turmeric is believed to brighten the skin and brings good fortune and prosperity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Mehndi
              </h3>
              <p>
                The Mehndi celebration is where intricate henna designs are applied to the bride&apos;s hands and feet. 
                This joyful ceremony brings together family and friends for music, dancing, and celebrations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                The Main Wedding
              </h3>
              <p>
                The main wedding ceremony typically involves the sacred fire (Agni) as a witness. 
                The couple exchanges vows and commitments in front of family and the divine.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Wedding Attire
          </h2>
          <p>
            Traditional Indian wedding attire is elaborate and colorful. Brides typically wear beautiful silk sarees 
            or lehengas in vibrant colors like red, gold, or maroon, adorned with intricate jewelry. 
            Grooms wear traditional sherwanis or kurtas paired with turbans or headpieces.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Family and Community
          </h2>
          <p>
            Indian weddings emphasize the importance of family and community. Multiple days of celebrations 
            bring together extended family members and close friends, making it a time of bonding and shared joy.
          </p>
        </section>
      </div>
    </ArticleLayout>
  );
}
