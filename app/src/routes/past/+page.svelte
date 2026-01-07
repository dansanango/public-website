<script>
    import { profile } from '$lib/data';
</script>

<svelte:head>
    <title>{profile.name} - Experience</title>
</svelte:head>

<section class="max-w-2xl">
    <h1 class="text-3xl font-bold tracking-tight mb-10 text-slate-900">Experience & Education</h1>

    <div class="mb-16 relative">
        <div class="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
        <h2 class="text-xs font-bold text-blue-900 uppercase tracking-widest mb-8 pl-6">Education</h2>
        
        <div class="space-y-10 pl-6">
            {#each profile.education as edu}
                <div class="relative group">
                    <div class="absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-50 border-2 border-slate-300 group-hover:border-blue-900 transition-colors"></div>
                    <div>
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 class="font-semibold text-slate-900 text-lg">{edu.school}</h3>
                            <span class="text-sm text-slate-500 font-mono whitespace-nowrap">{edu.period}</span>
                        </div>
                        <p class="text-blue-900 font-medium mb-1">{edu.degree}</p>
                        <p class="text-sm text-slate-600 leading-relaxed">{edu.details}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="mb-12 relative">
         <div class="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
        <h2 class="text-xs font-bold text-blue-900 uppercase tracking-widest mb-8 pl-6">Professional Experience</h2>
        
        <div class="space-y-12 pl-6">
            {#each profile.experience as role}
                <div class="relative group">
                    <div class="absolute -left-[29px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-50 border-2 border-slate-300 group-hover:border-blue-900 transition-colors"></div>
                    <div>
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 class="font-semibold text-slate-900 text-lg group-hover:text-blue-900 transition-colors">{role.company}</h3>
                            <span class="text-sm text-slate-500 font-mono whitespace-nowrap">{role.period}</span>
                        </div>
                        <p class="text-slate-700 font-medium mb-3 italic">{role.role}</p>
                        <ul class="space-y-2 text-slate-600 text-sm leading-relaxed">
                            {#each role.description as item}
                                <li class="flex items-start gap-2">
                                    <span class="mt-1.5 w-1 h-1 rounded-full bg-blue-900/40 shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
