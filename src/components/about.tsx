import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="border-t border-neutral-200 bg-neutral-50 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Card className="px-0">
          <CardHeader className="px-6 pt-10 sm:px-10">
            <CardTitle className="text-3xl sm:text-4xl">Who Are We?</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-10 sm:px-10">
            <CardDescription>
              We are a student ran organization focusing on coding in the Seattle Area.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
