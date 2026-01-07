<script>
    import { profile } from '$lib/data';
    // Filter experience that seems project-heavy or highlighting specific work
    const projects = profile.experience.filter(e => e.description.length > 2); 
</script>

<svelte:head>
    <title>{profile.name} - Projects</title>
</svelte:head>

<section class="max-w-2xl">
    <h1 class="text-3xl font-bold tracking-tight mb-10 text-slate-900">Projects & Research</h1>

    <div class="space-y-16">
        {#each projects as project}
            <div class="group relative pl-6 border-l w-full hover:border-blue-900/30 transition-colors border-slate-200">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                    <h3 class="text-xl font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {project.company}
                    </h3>
                    <span class="text-sm text-slate-500 font-mono">{project.period}</span>
                </div>
                <p class="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-4">{project.role}</p>
                
                <div class="space-y-4 text-slate-600 leading-relaxed text-sm">
                    {#each project.description as para}
                         <p>{para}</p>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
