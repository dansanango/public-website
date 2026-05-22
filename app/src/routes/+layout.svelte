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
    <main>
        {@render children()}
    </main>

    <footer style="margin-top: 6rem; text-align: center; color: var(--text-secondary); border-top: 1px solid var(--glass-border); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div style="display: flex; gap: 1.5rem;">
            {#each profile.socials as social}
                <a href={social.url} target="_blank" rel="noreferrer" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s ease;">
                    {social.name}
                </a>
            {/each}
        </div>
    </footer>
</div>

