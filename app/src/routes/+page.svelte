<script>
    import { profile } from '$lib/data';
</script>

<svelte:head>
    <title>{profile.name} - Home</title>
</svelte:head>

<section>
    <div class="prose prose-slate max-w-none mb-16 text-slate-600 leading-relaxed text-lg">
        <p>{profile.about}</p>
    </div>

    <div class="flex items-center gap-3 mb-8">
        <div class="h-px bg-slate-200 flex-1"></div>
        <h2 class="text-xs font-bold text-blue-900 uppercase tracking-widest">Latest Updates</h2>
        <div class="h-px bg-slate-200 flex-1"></div>
    </div>
    
    <div class="space-y-8 relative">
        <div class="absolute left-0 top-2 bottom-2 w-px bg-slate-200 ml-[7px]"></div>

        <div class="relative pl-8 group">
            <div class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-slate-100 border-2 border-slate-300 group-hover:border-blue-900 transition-colors z-10"></div>
            <span class="text-xs text-blue-900/60 font-mono mb-1 block group-hover:text-blue-900 transition-colors">Jun 2025</span>
            <p class="text-slate-700">Joined <span class="font-semibold text-slate-900">nLIGHT, Inc.</span> as an Optical Engineering Intern.</p>
        </div>

        <div class="relative pl-8 group">
             <div class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-slate-100 border-2 border-slate-300 group-hover:border-blue-900 transition-colors z-10"></div>
            <span class="text-xs text-blue-900/60 font-mono mb-1 block group-hover:text-blue-900 transition-colors">Jun 2024</span>
            <p class="text-slate-700">Started as an Undergraduate Researcher at <span class="font-semibold text-slate-900">MIT Quantum Photonics Laboratory</span>.</p>
        </div>

        <div class="relative pl-8 group">
             <div class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-slate-100 border-2 border-slate-300 group-hover:border-blue-900 transition-colors z-10"></div>
            <span class="text-xs text-blue-900/60 font-mono mb-1 block group-hover:text-blue-900 transition-colors">Sep 2023</span>
            <p class="text-slate-700">Joined the <span class="font-semibold text-slate-900">MIT Solar Electric Vehicle Team</span> as Infotainment Lead.</p>
        </div>
    </div>
</section>
