<script>
    import { profile } from '$lib/data';
    import { fade } from 'svelte/transition';
    
    let activeTab = 'optics';
    
    function setTab(tab) {
        activeTab = tab;
    }
</script>

<svelte:head>
    <title>{profile.name} - Home</title>
</svelte:head>

<section class="hero">
    <div class="hero-image-col">
        <img src="/headshot.png" alt="{profile.name}" class="headshot" />
    </div>
    <div class="hero-text-col">
        <h1 class="hero-title">{profile.name}</h1>
        <h2 class="hero-subtitle">{profile.title}</h2>
        <p class="hero-desc">
            {profile.about}
        </p>
    </div>
</section>

<section id="projects" class="projects-section">
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

    <div class="project-grid-wrapper">
        {#key activeTab}
            <div class="project-grid" in:fade={{duration: 300, delay: 100}} out:fade={{duration: 200}}>
                {#if profile.projects[activeTab]}
                    {#each profile.projects[activeTab] as project}
                        {#if project.link}
                            <a href={project.link} class="project-card" style="text-decoration: none; color: inherit;">
                                <div class="project-image-wrapper">
                                    <img src="{project.image}" alt="{project.title}" class="project-image" loading="lazy" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">{project.title}</h3>
                                    <p class="project-desc">{project.description}</p>
                                </div>
                            </a>
                        {:else}
                            <div class="project-card">
                                <div class="project-image-wrapper">
                                    <img src="{project.image}" alt="{project.title}" class="project-image" loading="lazy" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">{project.title}</h3>
                                    <p class="project-desc">{project.description}</p>
                                </div>
                            </div>
                        {/if}
                    {/each}
                {/if}
            </div>
        {/key}
    </div>
</section>
