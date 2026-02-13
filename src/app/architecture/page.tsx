import { SystemLayers, Capabilities, TechnicalSpecs } from "@/components";

export default function ArchitecturePage() {
    return (
        <main className="pt-24 min-h-screen">
            <SystemLayers />
            <TechnicalSpecs />
            <Capabilities />
        </main>
    );
}
