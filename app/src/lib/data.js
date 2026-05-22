export const profile = {
    name: "Daniel Sanango",
    title: "Optical Engineering @ MIT",
    about: "I’m a junior at MIT studying Electrical Engineering with a focus on optical sciences and photonics. My work centers on the design, simulation, and experimental characterization of optical and laser systems, with experience spanning semiconductor lasers, single-photon optics, and photodetector design.",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-sanango/" },
        { name: "Email", url: "mailto:danango@mit.edu" } // Inferred from typical MIT emails, can be updated
    ],
    experience: [
        {
            company: "nLIGHT, Inc.",
            role: "Optical Engineering Intern",
            location: "Vancouver, Washington",
            period: "Jun 2025 - Aug 2025",
            description: [
                "Designed and simulated single-mode Edge-Emitting Laser Diodes designs, increasing total power output 23.2%",
                "Varied quantum-wells, claddings, and ridge-waveguide geometry, increasing power 57% from base design",
                "Researched tapered-oscillator architectures, producing 15% power increase from non-tapered design",
                "Produced LIV curves through automated Python data acquisition, reducing simulation turnaround by ~20%",
                "Built and aligned near-field, far-field, and LIV characterization setups using rotating cameras and probes"
            ]
        },
        {
            company: "MIT Quantum Photonics Laboratory",
            role: "Undergraduate Researcher",
            location: "Cambridge, Massachusetts",
            period: "Jun 2024 - Jun 2025",
            description: [
                "Engineered 4f microscope with MEMs mirror to produce 2D scan of diamonds with sub-micron resolution",
                "Constructed Hanbury Brown-Twiss interferometer coupled to optical fiber and avalanche photodiode (APD)",
                "Validated single-photon, thermal, and coherent light input, tuning to achieve 4x reduction in coincidence noise",
                "Designed and fabricated CAD mounts for MEMS mirror and long-pass filter, shrinking footprint by 15%",
                "Integrated automated control of NI-DAQ and Moku:Pro via Python, cutting experiment setup time by 30%"
            ]
        },
        {
            company: "MIT Solar Electric Vehicle Team",
            role: "Infotainment Lead",
            location: "Cambridge, Massachusetts",
            period: "Sep 2023 - Jun 2025",
            description: [
                "Designed PCB to incorporate CAN car telemetry and power delivery to Raspberry Pi 5 and touchscreen",
                "Managed team of four on software, firmware, and hardware work, coming 20% ahead of projected timeline",
                "Optimized PCB footprint by ~50% and of system casing footprint by ~30% compared to previous design"
            ]
        },
        {
            company: "MIT EECS",
            role: "Grader (6.2300: Electromagnetic Waves)",
            location: "Cambridge, Massachusetts",
            period: "Jan 2025 - May 2025",
            description: [
                "Hosted assistance for 20+ students covering electromagnetics, transmission lines, resonators, waveguiding, diffraction, interference, antenna design, RF filters, and optical filters"
            ]
        },
        {
            company: "MIT Department of Physics",
            role: "Teaching Assistant (8.02: Electricity and Magnetism)",
            location: "Cambridge, Massachusetts",
            period: "Feb 2024 - May 2024",
            description: [
                "Guided students through collaborative Friday problem solving questions and strategies"
            ]
        }
    ],
    education: [
        {
            school: "Massachusetts Institute of Technology",
            degree: "Bachelor of Science",
            period: "Sep 2023 - May 2027",
            details: "Grade: 5.0/5.0. Activities: Alpha Delta Phi (President, Treasurer), Solar Electric Vehicle Team"
        },
        {
            school: "Bergenfield High School",
            degree: "High School Diploma",
            period: "Sep 2019 - May 2023",
            details: "Grade: 4.0/4.0 GPA. Activities: STEM Robotics (Lead), Mu Alpha Theta (President), Chamber Orchestra (Viola Section Leader)"
        }
    ],
    awards: [
        {
            title: "Egleston Scholar",
            issuer: "Columbia University",
            date: "May 2023",
            description: "Top 1% of accepted engineering applicants to Columbia University's engineering class"
        }
    ],
    projects: {
        optics: [
            {
                title: "Single-Mode Laser Diodes",
                description: "Designed and simulated Edge-Emitting Laser Diodes, increasing power output significantly.",
                image: "/thumb1.png"
            },
            {
                title: "4f MEMS Microscope",
                description: "Engineered a microscope with MEMs mirror to produce 2D scans of diamonds.",
                image: "/thumb2.png"
            }
        ],
        code: [
            {
                title: "Live Python Demo (Lab Scripts)",
                description: "Click here to try out an interactive, browser-based Python notebook using PyScript!",
                image: "/thumb1.png",
                link: "/interactive-demo.html"
            },
            {
                title: "Telemetry Dashboard",
                description: "React-based dashboard for real-time solar car telemetry data.",
                image: "/thumb2.png"
            }
        ],
        for_fun: [
            {
                title: "Prism Photography",
                description: "Experimenting with lasers and prisms to create rainbow refractions.",
                image: "/thumb2.png"
            },
            {
                title: "Custom PCB Design",
                description: "Designed a PCB for Raspberry Pi power delivery and CAN bus.",
                image: "/thumb1.png"
            }
        ]
    }
};
