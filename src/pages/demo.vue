<template>
    <v-main>
        <!-- Hero Section -->
        <v-carousel>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <section class="hero-section">
                    <v-img :src="slide.img" height="80vh" class="position-relative">
                        <video autoplay muted loop playsinline class="hero-video">
                            <source :src="slide.video" type="video/mp4" />
                        </video>
                        <div class="hero-overlay d-flex align-center justify-center">
                            <v-container>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" md="8" class="text-center text-white">
                                        <h1 class="text-h2 font-weight-bold mb-4">
                                            {{ slide.title }}
                                        </h1>
                                        <p class="text-h6 mb-6">
                                            {{ slide.desc }}
                                        </p>
                                        <v-btn size="large" color="primary" @click="onHeroCta">
                                            Learn More
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-img>
                </section>
            </v-carousel-item>
        </v-carousel>

        <!-- Services Section -->
        <section class="services-section py-12">
            <v-container>
                <v-row>
                    <v-col v-for="(item, idx) in services" :key="idx" cols="12" sm="6" md="4">
                        <v-card class="pa-4" variant="outlined" elevation="2">
                            <v-avatar size="56" class="mb-4">
                                <v-img :src="item.icon" />
                            </v-avatar>
                            <h3 class="text-h5 mb-2">{{ item.title }}</h3>
                            <p class="text-body-2 mb-4">{{ item.description }}</p>
                            <v-btn variant="text" size="small" @click="onServiceLearnMore(item)">
                                Learn More
                            </v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Portfolio / Case Study Section -->
        <section class="portfolio-section py-12 bg-grey-lighten-5">
            <v-container>
                <!-- Filter Chips -->
                <v-row justify="center" class="mb-6">
                    <v-chip-group v-model="selectedCategory" multiple>
                        <v-chip v-for="(cat, i) in categories" :key="i" :value="cat" class="ma-2" filter>
                            {{ cat }}
                        </v-chip>
                    </v-chip-group>
                </v-row>
                <!-- Grid Images -->
                <v-row>
                    <v-col v-for="(proj, i) in filteredProjects" :key="i" cols="12" sm="6" md="4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card v-bind="props" :elevation="isHovering ? 8 : 2"
                                class="overflow-hidden transition-swing">
                                <v-img :src="proj.image" height="200">
                                    <template #placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate />
                                        </v-row>
                                    </template>
                                    <div v-if="isHovering" class="overlay-text">
                                        <h4 class="text-white">{{ proj.title }}</h4>
                                    </div>
                                </v-img>
                                <v-card-actions>
                                    <v-btn variant="text" size="small" @click="viewProject(proj)">
                                        View Details
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mt-6">
                    <v-btn variant="outlined" @click="onViewMoreProjects">
                        View more
                    </v-btn>
                </v-row>
            </v-container>
        </section>

        <!-- Team Section -->
        <section class="team-section py-12">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-8">
                        <h2 class="text-h3 font-weight-bold mb-4">Our Team</h2>
                        <p class="text-h6 text-grey-darken-1">Meet the talented people behind our success</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="(member, i) in team" :key="i" cols="12" sm="6" md="3">
                        <v-card class="text-center pa-4" variant="outlined" elevation="2">
                            <v-avatar size="100" class="mx-auto mb-4">
                                <v-img :src="member.photo" />
                            </v-avatar>
                            <h4 class="text-h6 font-weight-medium">{{ member.name }}</h4>
                            <p class="text-caption text-grey-darken-1 mb-4">{{ member.role }}</p>
                            <v-btn variant="text" size="small" @click="onTeamLearnMore(member)">
                                Learn More
                            </v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Stories / Testimonials Section -->
        <section class="testimonials-section py-12 bg-grey-lighten-5">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-8">
                        <h2 class="text-h3 font-weight-bold mb-4">What Our Clients Say</h2>
                    </v-col>
                </v-row>
                <v-carousel hide-delimiter-background height="300" cycle show-arrows="hover"
                    delimiter-icon="mdi-circle">
                    <v-carousel-item v-for="(testi, i) in testimonials" :key="i">
                        <v-row class="fill-height" align="center" justify="center">
                            <v-col cols="12" md="8" class="text-center">
                                <v-icon class="mb-4" size="40" color="primary">mdi-format-quote-open</v-icon>
                                <p class="text-h6 mb-4 font-italic">"{{ testi.quote }}"</p>
                                <h4 class="text-h6 font-weight-medium mb-1">
                                    {{ testi.author }}
                                </h4>
                                <p class="text-caption text-grey-darken-1">{{ testi.position }}</p>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-container>
        </section>

        <!-- Pricing Section -->
        <section class="pricing-section py-12">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-8">
                        <h2 class="text-h3 font-weight-bold mb-4">Choose Your Plan</h2>
                        <p class="text-h6 text-grey-darken-1">Select the perfect plan for your needs</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="(plan, i) in pricingPlans" :key="i" cols="12" sm="6" md="4">
                        <v-card class="pa-6 text-center h-100" variant="outlined" elevation="2"
                            :class="{ 'border-primary': plan.popular }">
                            <v-chip v-if="plan.popular" color="primary" class="mb-4" size="small">
                                Most Popular
                            </v-chip>
                            <h3 class="text-h4 mb-2">{{ plan.name }}</h3>
                            <h4 class="text-h2 font-weight-bold text-primary mb-2">
                                {{ plan.price }}
                            </h4>
                            <p class="text-subtitle-1 mb-4">{{ plan.subtitle }}</p>
                            <v-list class="mb-4" lines="one">
                                <v-list-item v-for="(feat, j) in plan.features" :key="j" class="px-0">
                                    <template #prepend>
                                        <v-icon color="success">mdi-check</v-icon>
                                    </template>
                                    <v-list-item-title class="text-start">{{ feat }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-btn :color="plan.popular ? 'primary' : 'primary'"
                                :variant="plan.popular ? 'flat' : 'outlined'" block size="large"
                                @click="onBuyPlan(plan)">
                                Buy Now
                            </v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Stats Section -->
        <section class="stats-section py-12 bg-primary">
            <v-container>
                <v-row justify="center">
                    <v-col v-for="(stat, i) in stats" :key="i" cols="12" sm="4" class="text-center">
                        <h2 class="text-h2 font-weight-bold text-white mb-2">
                            {{ formatNumber(stat.current) }}
                        </h2>
                        <p class="text-h6 text-white">{{ stat.label }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Blog / Latest Posts Section -->
        <section class="blog-section py-12">
            <v-container>
                <v-row>
                    <v-col cols="12" class="text-center mb-8">
                        <h2 class="text-h3 font-weight-bold mb-4">Latest From Our Blog</h2>
                        <p class="text-h6 text-grey-darken-1">Stay updated with our latest insights and news</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="(post, i) in latestPosts" :key="i" cols="12" sm="6" md="4">
                        <v-card class="overflow-hidden h-100" variant="outlined" elevation="2">
                            <v-img :src="post.image" height="200" cover />
                            <v-card-text class="pa-4">
                                <h3 class="text-h6 mb-2">{{ post.title }}</h3>
                                <p class="text-caption text-grey-darken-1 mb-2">{{ post.date }}</p>
                                <p class="text-body-2 mb-4">{{ post.excerpt }}</p>
                            </v-card-text>
                            <v-card-actions class="pa-4 pt-0">
                                <v-btn variant="text" size="small" @click="viewPost(post)">
                                    Read More
                                    <v-icon end>mdi-arrow-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </v-main>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

const slides = [
    {
        img: new URL('@/assets/images/Home-7-slider-1.webp', import.meta.url).href,
        video: 'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        title: "We're a digital agency…",
        desc: "Creating innovative digital experiences that drive results and engage your audience"
    },
    {
        img: new URL('@/assets/images/Home-7-slider-2.webp', import.meta.url).href,
        video: 'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        title: "We're a digital agency…",
        desc: "Creating innovative digital experiences that drive results and engage your audience"
    },
    {
        img: new URL('@/assets/images/Home-7-slider-3.webp', import.meta.url).href,
        video: 'https://player.vimeo.com/external/379169077.hd.mp4?s=cac8ef4ee8a00b37c8adcc4a4c3604c2a8b06669&profile_id=175',
        title: "We're a digital agency…",
        desc: "Creating innovative digital experiences that drive results and engage your audience"
    }
];

// --- Services Data
interface Service {
    icon: string
    title: string
    description: string
}

const services = reactive<Service[]>([
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/2010/2010990.png',
        title: 'Layout Design',
        description: 'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.',
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/4215/4215831.png',
        title: 'Cloud Computing',
        description: 'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.',
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
        title: 'Content Management',
        description: 'This is Photoshop\'s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.',
    },
])

function onServiceLearnMore(item: Service) {
    console.log('Learn more:', item)
}

// --- Portfolio Data
interface Project {
    image: string
    title: string
    categories: string[]
}

const projects = reactive<Project[]>([
    {
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
        title: 'Project Alpha',
        categories: ['Branding', 'Design']
    },
    {
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
        title: 'Project Beta',
        categories: ['Design', 'UI']
    },
    {
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Project Gamma',
        categories: ['Photography']
    },
    {
        image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Project Delta',
        categories: ['UI', 'UX']
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
        title: 'Project Epsilon',
        categories: ['Branding']
    },
    {
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Project Zeta',
        categories: ['Photography', 'Design']
    },
])

const categories = ref<string[]>(['All', 'Branding', 'Design', 'Photography', 'UI', 'UX'])
const selectedCategory = ref<string[]>(['All'])

const filteredProjects = computed(() => {
    if (selectedCategory.value.includes('All') || selectedCategory.value.length === 0) {
        return projects
    }
    return projects.filter((p) =>
        p.categories.some((c) => selectedCategory.value.includes(c))
    )
})

function viewProject(proj: Project) {
    console.log('View project:', proj)
}

function onViewMoreProjects() {
    console.log('View more projects')
}

// --- Team Data
interface Member {
    photo: string
    name: string
    role: string
}

const team = reactive<Member[]>([
    {
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        name: 'Sofia Martinez',
        role: 'Finance Head'
    },
    {
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        name: 'John Doe',
        role: 'Lead Developer'
    },
    {
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        name: 'Michael Chen',
        role: 'Marketing Head'
    },
    {
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        name: 'Emma Johnson',
        role: 'Design Lead'
    },
])

function onTeamLearnMore(member: Member) {
    console.log('Team member:', member)
}

// --- Testimonials Data
interface Testimonial {
    quote: string
    author: string
    position: string
}

const testimonials = reactive<Testimonial[]>([
    {
        quote: 'Beautiful themes, they are just spot on. Design driven and absolutely stunning work.',
        author: 'John Doe',
        position: 'Designer @Legato',
    },
    {
        quote: 'Could you ask for more? Professional service and outstanding results every time.',
        author: 'Jane Smith',
        position: 'CEO @TechCorp',
    },
    {
        quote: 'Exceptional quality and attention to detail. Highly recommend their services.',
        author: 'Mike Johnson',
        position: 'Marketing Director @StartupX',
    },
])

// --- Pricing Data
interface PricingPlan {
    name: string
    price: string
    subtitle: string
    features: string[]
    popular?: boolean
}

const pricingPlans = reactive<PricingPlan[]>([
    {
        name: 'Basic',
        price: '$199',
        subtitle: 'Perfect for starters',
        features: ['10 GB of Space', '5 Free Widgets', 'Three Domains', 'Email Support'],
    },
    {
        name: 'Standard',
        price: '$299',
        subtitle: 'Most popular choice',
        features: ['20 GB of Space', '10 Free Widgets', 'Five Domains', 'Priority Support'],
        popular: true,
    },
    {
        name: 'Premium',
        price: '$399',
        subtitle: 'For large enterprises',
        features: ['50 GB of Space', 'Unlimited Widgets', 'Unlimited Domains', '24/7 Support'],
    },
])

function onBuyPlan(plan: PricingPlan) {
    console.log('Buy plan:', plan)
}

// --- Stats Data & Animation
interface Stat {
    label: string
    target: number
    current: number
}

const stats = reactive<Stat[]>([
    { label: 'Years in Business', target: 4, current: 0 },
    { label: 'Websites Created', target: 300, current: 0 },
    { label: 'Happy Clients', target: 150, current: 0 },
])

function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
}

function animateStats() {
    stats.forEach((s) => {
        const duration = 2000
        const start = performance.now()
        const initial = 0

        function step(time: number) {
            const progress = Math.min((time - start) / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            s.current = Math.floor(initial + easeOutQuart * (s.target - initial))

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                s.current = s.target
            }
        }
        requestAnimationFrame(step)
    })
}

onMounted(() => {
    const section = document.querySelector('.stats-section')
    if (section) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateStats()
                        io.disconnect()
                    }
                })
            },
            { threshold: 0.3 }
        )
        io.observe(section)
    }
})

// --- Blog / Latest Posts Data
interface Post {
    image: string
    title: string
    date: string
    excerpt: string
}

const latestPosts = reactive<Post[]>([
    {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
        title: 'The Future of Web Design: Trends to Watch',
        date: 'June 20, 2024',
        excerpt: 'Discover the latest trends shaping the future of web design and how they can benefit your business...',
    },
    {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
        title: 'Maximizing ROI with Digital Marketing',
        date: 'June 15, 2024',
        excerpt: 'Learn proven strategies to maximize your return on investment with effective digital marketing campaigns...',
    },
    {
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Building User-Centric Mobile Apps',
        date: 'June 10, 2024',
        excerpt: 'Explore best practices for creating mobile applications that truly serve your users\' needs...',
    },
])

function viewPost(post: Post) {
    console.log('View post:', post)
}

// Handler for the hero section CTA button
function onHeroCta() {
    console.log('Hero CTA clicked')
}
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 100%);
    z-index: 2;
}

.overlay-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 100%);
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.services-section {
    .v-card {
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
        }
    }
}

.portfolio-section {
    .v-card {
        cursor: pointer;

        &:hover {
            .v-img {
                transform: scale(1.05);
                transition: transform 0.3s ease;
            }
        }
    }
}

.team-section {
    .v-card {
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
        }
    }
}

.testimonials-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.pricing-section {
    .v-card {
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }

        &.border-primary {
            border: 2px solid rgb(var(--v-theme-primary)) !important;
        }
    }
}

.stats-section {
    background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, #1976d2 100%);
}

.blog-section {
    .v-card {
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
        }
    }
}

// Responsive adjustments
@media (max-width: 768px) {
    .hero-section {
        .text-h2 {
            font-size: 2rem !important;
        }

        .text-h6 {
            font-size: 1.1rem !important;
        }
    }

    .stats-section {
        .text-h2 {
            font-size: 2.5rem !important;
        }
    }
}

// Animation classes
.transition-swing {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

// Custom scrollbar for webkit browsers
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: rgb(var(--v-theme-primary));
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #1976d2;
}

.hero-section {
    position: relative;
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
}
</style>