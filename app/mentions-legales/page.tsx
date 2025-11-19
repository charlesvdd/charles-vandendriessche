import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mentions Légales
            </h1>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Éditeur du site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Nom :</strong> Charles Van den Driessche
                  </p>
                  <p>
                    <strong className="text-foreground">Statut :</strong> Auto-entrepreneur
                  </p>
                  <p>
                    <strong className="text-foreground">Adresse :</strong> 8 rue de la Gare, 62860 SAUCHY LESTREE,
                    France
                  </p>
                  <p>
                    <strong className="text-foreground">Email :</strong>{" "}
                    <a href="mailto:contact@charles-vandendriessche.fr" className="hover:underline">
                      contact@charles-vandendriessche.fr
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Hébergement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Hébergeur :</strong> IONOS SARL
                  </p>
                  <p>
                    <strong className="text-foreground">Adresse :</strong> 7 Place de la Gare, 57200 Sarreguemines,
                    France
                  </p>
                  <p>
                    <strong className="text-foreground">Site web :</strong>{" "}
                    <a
                      href="https://www.ionos.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.ionos.fr
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="leading-relaxed">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et
                    la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                    documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                    Protection des données personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement
                    Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de
                    suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p className="leading-relaxed">
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse email :{" "}
                    <a href="mailto:contact@charles-vandendriessche.fr" className="hover:underline">
                      contact@charles-vandendriessche.fr
                    </a>
                  </p>
                  <p className="leading-relaxed">
                    Les données collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos
                    demandes et ne sont en aucun cas transmises à des tiers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Cookies</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer
                    votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas
                    fonctionner correctement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Limitation de responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Charles Van den Driessche s'efforce d'assurer l'exactitude et la mise à jour des informations
                    diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité
                    des informations mises à disposition sur ce site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Liens hypertextes</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Ce site peut contenir des liens vers d'autres sites. Charles Van den Driessche n'exerce aucun
                    contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
