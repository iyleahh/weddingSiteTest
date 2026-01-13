import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Mexican Traditions",
  description: "Discover the colorful and joyful traditions of Mexican culture and celebrations."
};

export default function MexicanTraditionsPage() {
  return (
    <ArticleLayout
      title="Mexican Traditions"
      excerpt="Discover the colorful and joyful traditions of Mexican culture and celebrations."
      image="/img/traditions/mexican.jpg"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Warmth of Mexican Celebrations
          </h2>
          <p>
            Mexican traditions celebrate love, family, and community with vibrant colors, joyful music, and delicious food. 
            These celebrations reflect centuries of cultural heritage and the importance of bringing people together.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Traditional Ceremonies
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                La Pedida
              </h3>
              <p>
                The "asking" ceremony where the groom and his family formally ask for the bride's hand in marriage. 
                This tradition emphasizes respect and family involvement in the union.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Las Arras
              </h3>
              <p>
                During the wedding ceremony, the groom gives thirteen coins to the bride as a symbol of his commitment 
                to care for and support her throughout their marriage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                El Lazo
              </h3>
              <p>
                A decorative lasso is placed around the couple during the ceremony, symbolizing the unity of their two families 
                and their eternal bond. This lasso is often kept as a precious keepsake.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                The Reception
              </h3>
              <p>
                Mexican receptions are filled with music, dancing, and festive celebrations that often last long into the night. 
                The couple's first dance is a special moment shared with family and friends.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Wedding Attire
          </h2>
          <p>
            Traditional Mexican brides often wear elegant white gowns with lace details, while some choose colorful embroidered dresses 
            inspired by regional folk traditions. Grooms typically wear tailored suits or traditional charro outfits with decorative details. 
            Vibrant colors and intricate embroidery reflect the richness of Mexican culture.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Food and Celebration
          </h2>
          <p>
            No Mexican celebration is complete without delicious food! Traditional wedding menus might include chiles rellenos, mole, 
            tamales, and fresh seafood. The wedding cake, often a multi-tiered creation, is ceremoniously cut and shared with all guests. 
            Music, dancing, and the bride and groom mingling with guests ensures everyone feels the joy and warmth of the occasion.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            A Celebration of Love and Unity
          </h2>
          <p>
            Mexican wedding traditions emphasize the importance of family, faith, and the celebration of love. 
            These customs create lasting memories and strengthen bonds within families and communities.
          </p>
        </section>
      </div>
    </ArticleLayout>
  );
}
