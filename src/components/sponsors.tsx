import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="bg-white px-6 py-24"
    >
      <Card className="mx-auto max-w-4xl border-dashed border-neutral-300 bg-neutral-50 text-center text-neutral-600">
        <CardHeader className="px-6 pt-12 sm:px-10">
          <CardTitle className="text-2xl text-neutral-800">
            Sponsor Highlight Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-12 sm:px-10">
          <CardDescription className="text-base text-neutral-600">
            Showcase your organization and support SACO students. Reach out to learn more about
            sponsorship opportunities.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};
