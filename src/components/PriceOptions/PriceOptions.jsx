import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Free",
      features: [
        "1 user only",
        "Basic support via email",
        "Limited storage (1GB)",
        "Community forum access",
        "Basic usage analytics",
        "Limited API access",
        "No custom domains",
        "Ads displayed",
      ],
      price: 0,
    },
    {
      id: 2,
      name: "Starter",
      features: [
        "Up to 3 users",
        "Email support (24–48h response)",
        "10GB secure cloud storage",
        "Custom domain support",
        "Basic analytics dashboard",
        "API rate limit: 1,000 requests/day",
        "Remove branding",
        "Access to starter templates",
        "Monthly usage reports",
      ],
      price: 9.99,
    },
    {
      id: 3,
      name: "Professional",
      features: [
        "Up to 10 users",
        "Priority email support (within 12h)",
        "100GB storage with daily backups",
        "Advanced analytics & reporting",
        "API rate limit: 100,000 requests/day",
        "Team collaboration tools",
        "Role-based access control",
        "Custom branding options",
        "Audit logs",
        "Integration with Slack & Google Workspace",
      ],
      price: 29.99,
    },
    {
      id: 4,
      name: "Enterprise",
      features: [
        "Unlimited users",
        "Dedicated account manager",
        "1TB+ scalable storage",
        "Enterprise-grade security (SSO, MFA)",
        "Custom SLA & uptime guarantee",
        "API rate limit: Unlimited",
        "Advanced team management",
        "Custom integrations & white labeling",
        "Onboarding & training support",
        "24/7 priority phone & chat support",
        "Dedicated infrastructure (optional)",
        "Quarterly business reviews",
      ],
      price: 99.99,
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices</h2>
      <div className="grid grid-cols-4 gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
