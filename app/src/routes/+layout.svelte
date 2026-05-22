<script>
    import '../app.css';
    import { profile } from '$lib/data';
    let { children } = $props();
</script>

<div class="background-beams">
    <div class="beam beam-1"></div>
    <div class="beam beam-2"></div>
    <div class="beam beam-3"></div>
</div>

<div class="container">
    <header style="display: flex; justify-content: flex-end; gap: 1.5rem; padding: 1rem 0 2rem;">
        {#each profile.socials as social}
            <a href={social.url} target="_blank" rel="noreferrer" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: color 0.3s ease;">
                {social.name}
            </a>
        {/each}
    </header>

    <main>
        {@render children()}
    </main>

    <footer style="margin-top: 6rem; text-align: center; color: var(--text-secondary); border-top: 1px solid var(--glass-border); padding-top: 2rem; padding-bottom: 2rem;">
        <span>© {new Date().getFullYear()} {profile.name}</span>
    </footer>
</div>

