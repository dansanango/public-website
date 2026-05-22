<script>
    import { profile } from '$lib/data';
    
    let activeTab = 'optics';
    
    function setTab(tab) {
        activeTab = tab;
    }
</script>

<svelte:head>
    <title>{profile.name} - Home</title>
</svelte:head>

<section class="hero">
    <div class="headshot-container rainbow-glow">
        <img src="/headshot.png" alt="{profile.name}" class="headshot" />
    </div>
    
    <h1 class="hero-title">{profile.name}</h1>
    <h2 class="hero-subtitle rainbow-text">{profile.title}</h2>
    
    <p style="margin-top: 2rem; color: var(--text-secondary); max-width: 600px; font-size: 1.1rem; line-height: 1.8;">
        {profile.about}
    </p>
</section>

<section id="projects" style="margin-top: 4rem;">
    <div class="tabs">
        <button 
            class="tab-btn {activeTab === 'optics' ? 'active' : ''}" 
            on:click={() => setTab('optics')}>
            Optics
        </button>
        <button 
            class="tab-btn {activeTab === 'code' ? 'active' : ''}" 
            on:click={() => setTab('code')}>
            Code
        </button>
        <button 
            class="tab-btn {activeTab === 'for_fun' ? 'active' : ''}" 
            on:click={() => setTab('for_fun')}>
            For Fun
        </button>
    </div>

    <div class="project-grid">
        {#if profile.projects[activeTab]}
            {#each profile.projects[activeTab] as project}
                <div class="project-card">
                    <div class="project-image-wrapper">
                        <img src="{project.image}" alt="{project.title}" class="project-image" />
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-desc">{project.description}</p>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</section>
