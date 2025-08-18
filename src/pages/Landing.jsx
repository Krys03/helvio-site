import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
  Badge,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import helvioCardGlacier from "../assets/helvio_card_glacier.svg?url";
import helvioPhone from "../assets/helvio_phone_mock.svg?url";
import helvioDashboard from "../assets/helvio_dashboard_mock.svg?url";

export default function Landing() {
  const { accessToken } = useAuth();
  const ctaHref = accessToken ? "/app" : "/login";
  const ctaLabel = accessToken ? "Entrer dans l’app" : "Se connecter";

  const heroText = useColorModeValue("gray.900", "white");
  const heroSub = useColorModeValue("gray.600", "whiteAlpha.800");
  const chipBg = useColorModeValue("blackAlpha.50", "whiteAlpha.200");
  const chipBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const featuresBg = useColorModeValue("gray.50", "gray.900");
  const thinWhite = useColorModeValue("whiteAlpha.900", "whiteAlpha.600"); // bord 1px net

  // ===== Responsive (plus de breakpoints, pas de changement visuel voulu) =====
  const visualMinH = useBreakpointValue({
    base: "460px",
    sm: "520px",
    md: "600px",
    lg: "640px",
    xl: "700px",
    "2xl": "760px",
  });

  // Largeur dashboard
  const dashWidth = useBreakpointValue({
    base: "min(88vw, 520px)",
    sm: "min(86vw, 560px)",
    md: "540px",
    lg: "560px",
    xl: "600px",
    "2xl": "680px",
  });
  const dashTop = useBreakpointValue({ base: "6px", md: "16px" });
  const dashLeft = useBreakpointValue({ base: "50%", md: "10%" });
  const dashTransform = useBreakpointValue({ base: "translateX(-50%)", md: "none" });

  // Carte (gauche)
  const cardWidth = useBreakpointValue({
    base: "clamp(168px, 44vw, 220px)",
    sm: "clamp(182px, 38vw, 230px)",
    md: "230px",
    lg: "238px",
    xl: "248px",
    "2xl": "260px",
  });
  const cardBottom = useBreakpointValue({
    base: "120px",
    sm: "138px",
    md: "200px",
    lg: "220px",
    xl: "228px",
    "2xl": "236px",
  });
  const cardLeft = useBreakpointValue({
    base: "8%",
    sm: "10%",
    md: "4%",
    lg: "3%",
    xl: "2%",
    "2xl": "1%",
  });
  const cardRotate = "-3.5deg";

  // Téléphone (droite)
  const phoneWidth = useBreakpointValue({
    base: "clamp(164px, 42vw, 205px)",
    sm: "205px",
    md: "208px",
    lg: "214px",
    xl: "220px",
    "2xl": "230px",
  });
  const phoneBottom = useBreakpointValue({
    base: "118px",
    sm: "130px",
    md: "160px",
    lg: "180px",
    xl: "195px",
    "2xl": "205px",
  });
  // ⚠️ Pas de négatif sur petits écrans pour éviter le scroll, léger négatif seulement dès lg+
  const phoneRight = useBreakpointValue({
    base: "6%",
    sm: "8%",
    md: "4%",
    lg: "-6%",
    xl: "-10%",
    "2xl": "-12%",
  });
  const phoneRotate = "10deg";

  return (
    // overflowX hidden = on coupe tout débordement (élimine le scroll latéral)
    <Box as="main" overflowX="hidden">
      {/* ===== HERO (fond blanc) ===== */}
      <Box
        as="section"
        bg={useColorModeValue("white", "gray.800")}
        py={{ base: 12, md: 20 }}
        pb={{ base: 20, md: 36 }} // espace bas -> rien ne chevauche les features
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, md: 16 }}>
            {/* LEFT: texte + CTAs */}
            <Stack spacing={6} align="start">
              <Badge
                bg={chipBg}
                border="1px solid"
                borderColor={chipBorder}
                rounded="full"
                px={3}
                py={1}
                fontWeight="medium"
                color={heroText}
              >
                Néo-bank pour la Supply Chain
              </Badge>

              <Heading size={{ base: "xl", md: "2xl" }} lineHeight="1.1" color={heroText}>
                Le{" "}
                <Box
                  as="span"
                  bgGradient="linear(to-r, #6366F1, #22D3EE)"
                  bgClip="text"
                >
                  cockpit néo-bank
                </Box>{" "}
                pour tes factures
              </Heading>

              <Text color={heroSub} fontSize={{ base: "md", md: "lg" }} maxW="2xl">
                Crée, envoie et suis tes factures en temps réel. Un flux clair
                entre <strong>Supplier</strong> et <strong>Buyer</strong> :
                Sent → Under Review → Approved/Rejected → Paid.
              </Text>

              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to={ctaHref}
                  size="lg"
                  bgGradient="linear(to-r, #6366F1, #22D3EE)"
                  color="white"
                >
                  {ctaLabel}
                </Button>
                <Button
                  as={RouterLink}
                  to="/app/invoices"
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  isDisabled={!accessToken}
                  title={!accessToken ? "Connecte-toi d’abord" : "Voir les factures"}
                >
                  Voir les factures
                </Button>
              </HStack>

              <HStack spacing={4} pt={2} opacity={0.9}>
                <Badge colorScheme="green" variant="subtle">Sécurisé JWT</Badge>
                <Badge colorScheme="purple" variant="subtle">Rôles: Admin / Supplier / Buyer</Badge>
                <Badge colorScheme="blue" variant="subtle">PostgreSQL</Badge>
              </HStack>
            </Stack>

            {/* RIGHT: collage images (assets locaux) */}
            <Box position="relative" minH={visualMinH}>
              {/* Dashboard (base) */}
              <Box
                position="absolute"
                top={dashTop}
                left={dashLeft}
                transform={dashTransform}
                rounded="2xl"
                overflow="hidden"
                shadow="xl"
                border="1px solid"
                borderColor={thinWhite}   // ✅ liseré 1px collé
                zIndex={2}
                pointerEvents="none"
              >
                <Image
                  src={helvioDashboard}
                  alt="Aperçu dashboard Helvio"
                  objectFit="cover"
                  w={dashWidth}
                  maxW="560px"
                  loading="lazy"
                  draggable={false}
                />
              </Box>

              {/* Carte à gauche — chevauchement */}
              <Box
                position="absolute"
                bottom={cardBottom}
                left={cardLeft}
                transform={`rotate(${cardRotate})`}
                rounded="2xl"
                overflow="hidden"
                //shadow="lg"
                //border="1px solid"
                //borderColor={thinWhite}
                zIndex={3}
                pointerEvents="none"
              >
                <Image
                  src={helvioCardGlacier}
                  alt="Carte Helvio glacier"
                  objectFit="cover"
                  w={cardWidth}
                  loading="lazy"
                  draggable={false}
                />
              </Box>

              {/* Téléphone à droite — chevauchement */}
              <Box
                position="absolute"
                bottom={phoneBottom}
                right={phoneRight}
                transform={`rotate(${phoneRotate})`}
                rounded="2xl"
                overflow="hidden"
                //shadow="lg"
                //border="1px solid"
                //borderColor={thinWhite}
                zIndex={3}
                pointerEvents="none"
              >
                <Image
                  src={helvioPhone}
                  alt="Mobile Helvio"
                  objectFit="cover"
                  w={phoneWidth}
                  loading="lazy"
                  draggable={false}
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FEATURES */}
      <Box as="section" py={{ base: 12, md: 16 }} bg={featuresBg}>
        <Container maxW="6xl">
          <Stack spacing={8}>
            <Heading size="lg">Pourquoi Helvio ?</Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Feature
                title="Création ultra-simple"
                desc="Un supplier peut créer et envoyer sa facture en 30 secondes."
              />
              <Feature
                title="Visibilité par rôle"
                desc="Supplier & Buyer voient leurs propres factures ; Admin voit tout."
              />
              <Feature
                title="Statuts clairs"
                desc="Sent, Under Review, Approved/Rejected, Paid — zéro ambiguïté."
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA FINAL (gradient bleu) */}
      <Box as="section" py={{ base: 12, md: 16 }} bgGradient="linear(to-r, #6366F1, #22D3EE)" >
        <Container maxW="6xl">
          <Stack spacing={6} align="center" textAlign="center">
            <Heading color="white">Prêt à accélérer ta facturation ?</Heading>
            <Text color="whiteAlpha.900" maxW="2xl">
              Rejoins Helvio et passe au cockpit néo-bank de ta Supply Chain.
            </Text>
            <HStack spacing={3}>
              <Button as={RouterLink} to={ctaHref} size="lg" variant="solid" colorScheme="whiteAlpha">
                {ctaLabel}
              </Button>
              <Button
                as={RouterLink}
                to="/app/invoices"
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
                isDisabled={!accessToken}
                title={!accessToken ? "Connecte-toi d’abord" : "Voir les factures"}
              >
                Voir les factures
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

function Feature({ title, desc }) {
  return (
    <Stack
      p={5}
      bg={useColorModeValue("white", "gray.800")}
      rounded="xl"
      border="1px solid"
      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
      shadow="sm"
      spacing={2}
    >
      <Heading size="md">{title}</Heading>
      <Text color={useColorModeValue("gray.600", "gray.300")}>{desc}</Text>
    </Stack>
  );
}
