<template>
    <v-container class="team-section py-16">
        <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

        <div class="title-container text-center mb-12">
            <h2 class="text-h3 font-weight-bold animated-title">
                Our Team
            </h2>
        </div>

        <v-row justify="center" class="team-grid">
            <v-col v-for="member in teamMembers" :key="member.name" cols="12" sm="6" md="3" lg="3" xl="3"
                class="team-col">
                <div class="team-member-card">
                    <div class="member-image-container">
                        <v-img :src="member.image" :alt="member.alt" :aspect-ratio="1" cover class="member-image" />
                        <div class="social-overlay">
                            <div class="social-icons">
                                <a href="#" class="social-icon facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon youtube">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#" class="social-icon instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="member-info">
                        <h3 class="member-name">
                            {{ member.name }}
                        </h3>
                        <p class="member-role">
                            {{ member.role }}
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface TeamMember {
    name: string
    role: string
    image: string
    alt: string
}

const teamMembers = ref<TeamMember[]>([
    {
        name: 'Camden',
        role: 'Customer support',
        image: '/src/assets/images/about/team-1-1.webp',
        alt: 'Camden - Customer Support'
    },
    {
        name: 'Audrey',
        role: 'CEO',
        image: '/src/assets/images/about/team-2-1.webp',
        alt: 'Audrey - CEO'
    },
    {
        name: 'Emmett',
        role: 'MD',
        image: '/src/assets/images/about/team-3-1.webp',
        alt: 'Emmett - MD'
    },
    {
        name: 'Yvonne',
        role: 'Quality manager',
        image: '/src/assets/images/about/team-4-1.webp',
        alt: 'Yvonne - Quality Manager'
    }
])
</script>

<style scoped>
.team-section {
    max-width: 1400px;
    margin: 0 auto;
}

.title-container {
    position: relative;
    display: inline-block;
    width: 100%;
}

.animated-title {
    position: relative;
    color: #333;
    display: inline-block;
    padding: 8px 16px;
    z-index: 1;
}

/* Animated background behind text */
.animated-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #d4c5a0, #c4b590, #d4c5a0);
    animation: growShrink 3s ease-in-out infinite;
    z-index: -1;
    border-radius: 2px;
}

@keyframes growShrink {
    0% {
        height: 2px;
    }

    50% {
        height: 30px;
    }

    100% {
        height: 2px;
    }
}

.team-grid {
    gap: 25px;
}

.team-col {
    padding: 0;
}

.team-member-card {
    background: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    height: 100%;
}

/* Removed shimmer effect */

.team-member-card:hover {
    /* Removed box-shadow hover effect */
}

.member-image-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #f5f5f5;
}

.member-image {
    transition: all 0.3s ease;
    width: 100%;
}

.team-member-card:hover .member-image {
    transform: scale(1.05);
    opacity: 0.7;
}

.social-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
}

.team-member-card:hover .social-overlay {
    opacity: 1;
}

.social-icons {
    display: flex;
    gap: 10px;
    transform: translateY(-20px);
    transition: transform 0.3s ease;
}

.team-member-card:hover .social-icons {
    transform: translateY(0);
}

.social-icon {
    width: 40px;
    height: 40px;
    background: rgba(91, 106, 79, 0.9);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.social-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.social-icon.facebook:hover {
    background: #1877f2;
}

.social-icon.twitter:hover {
    background: #1da1f2;
}

.social-icon.youtube:hover {
    background: #ff0000;
}

.social-icon.instagram:hover {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.member-info {
    padding: 24px 16px;
    text-align: center;
    background: white;
    position: relative;
    z-index: 2;
}

.member-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    transition: color 0.3s ease;
}

.team-member-card:hover .member-name {
    color: #8b7355;
}

.member-role {
    font-size: 1rem;
    color: #666;
    text-transform: capitalize;
    font-weight: 500;
    margin: 0;
}

/* Responsive adjustments */
@media (min-width: 960px) {
    .team-col {
        flex: 0 0 calc(25% - 18.75px);
        max-width: calc(25% - 18.75px);
    }
}

@media (max-width: 959px) and (min-width: 600px) {
    .animated-title {
        font-size: 2.5rem !important;
    }

    .team-grid {
        gap: 20px;
    }

    .team-col {
        flex: 0 0 calc(50% - 10px);
        max-width: calc(50% - 10px);
    }

    .member-info {
        padding: 20px 12px;
    }
}

@media (max-width: 599px) {
    .animated-title {
        font-size: 2rem !important;
    }

    .team-grid {
        gap: 16px;
    }

    .team-col {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .member-info {
        padding: 16px 12px;
    }

    .member-name {
        font-size: 1.25rem;
    }
}
</style>