<script>
	import '../app.css';
	import { profile } from '$lib/data';
    import { page } from '$app/stores';

	let { children } = $props();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Experience', href: '/past' },
        { label: 'Projects', href: '/projects' }
    ];
</script>

<div class="min-h-screen max-w-3xl mx-auto px-6 py-12 md:py-20 bg-slate-50 text-slate-900 selection:bg-blue-100">
    <header class="mb-20 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h1 class="text-4xl font-bold tracking-tight mb-2 text-slate-900">{profile.name}</h1>
                <p class="text-blue-900 font-medium tracking-wide">{profile.title}</p>
            </div>
            
            <nav class="flex gap-6 text-sm font-medium">
                {#each navItems as item}
                    <a 
                        href={item.href} 
                        class="relative py-1 transition-colors hover:text-blue-900 {$page.url.pathname === item.href ? 'text-blue-900' : 'text-slate-500'}"
                    >
                        {item.label}
                        {#if $page.url.pathname === item.href}
                            <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-900 rounded-full" ></span>
                        {/if}
                    </a>
                {/each}
            </nav>
        </div>
    </header>

    <main class="animate-fade-in delay-100">
        {@render children()}
    </main>

    <footer class="mt-32 pt-8 border-t border-slate-200 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in delay-200">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div class="flex gap-6">
            {#each profile.socials as social}
                <a href={social.url} target="_blank" rel="noreferrer" class="hover:text-blue-900 transition-colors flex items-center gap-2 group">
                    <span class="group-hover:-translate-y-0.5 transition-transform duration-300">
                        {social.name}
                    </span>
                    <!-- Simple Arrow Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-900"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
            {/each}
        </div>
    </footer>
</div>


