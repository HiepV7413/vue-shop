<template>
    <v-container class="faq">
        <h3 class="text-center text-h4 font-weight-bold mb-6">
            FAQ
        </h3>
        <!-- Breadcrumb -->
        <div class="d-flex justify-center mb-8">
            <v-breadcrumbs :items="breadcrumbs" class="justify-center pa-0">
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item :href="item.href" :disabled="item.disabled" class="breadcrumb-item">
                        {{ item.title }}
                    </v-breadcrumbs-item>
                </template>
                <template v-slot:divider>
                    <span class="mx-2">/</span>
                </template>
            </v-breadcrumbs>
        </div>

        <!-- Title with animated underline -->
        <div class="title-container">
            <h2 class="text-center text-h3 font-weight-bold mb-8 animated-title">
                Frequently Asked Question
            </h2>
        </div>

        <!-- Accordion FAQ List -->
        <v-expansion-panels variant="accordion" class="faq-panels">
            <v-expansion-panel v-for="(faq, index) in faqs" :key="index" class="mb-3 faq-panel" elevation="0">
                <v-expansion-panel-title class="font-weight-medium text-body-1 faq-title" expand-icon="mdi-plus"
                    collapse-icon="mdi-minus">
                    {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="faq-content">
                    <div class="pa-4">
                        {{ faq.answer }}
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
export default {
    name: "FaqPage",
    data() {
        return {
            breadcrumbs: [
                { title: 'Home', disabled: false, href: '/' },
                { title: 'Faq', disabled: true }
            ],
            faqs: [
                {
                    question: 'What shipping methods are available?',
                    answer: 'Proin libero nunc consequat interdum varius. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Donec ac odio tempor orci. At augue eget arcu dictum varius duis at. Tempor id eu nisl nunc mi. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Purus in massa tempor nec. Id consectetur purus ut faucibus pulvinar elementum. Tristique et egestas quis ipsum suspendisse.'
                },
                {
                    question: 'What payment methods are accepted?',
                    answer: 'Fusce a fermentum leo. Morbi quis eleifend nulla. Curabitur sit amet nunc sagittis, congue massa sed, condimentum enim. Aenean lacinia risus elementum, viverra justo rhoncus, mattis massa. Praesent ornare nunc rutrum, feugiat ante eu, tempor lacus. Etiam dui leo, scelerisque in congue id, feugiat et eros.'
                },
                {
                    question: 'How do I track my order?',
                    answer: 'Integer a erat vitae nunc convallis eleifend eu quis arcu. Vivamus et turpis nibh. Suspendisse vel eros at ex elementum pulvinar in vel ipsum. Donec iaculis ullamcorper ante et faucibus. Pellentesque et augue euismod nunc pharetra consectetur id iaculis ante. Sed eget metus sodales, ullamcorper nulla nec, mollis purus.'
                },
                {
                    question: 'Do you ship internationally?',
                    answer: 'Nullam egestas vel lectus non pretium. Nam et lorem id risus scelerisque hendrerit. Suspendisse ornare, magna non volutpat interdum, tellus felis condimentum magna, non laoreet mauris eros vel nisi. In luctus lectus convallis, tempor quam at, eleifend eros. Nunc velit turpis, interdum a mi sit amet, facilisis elementum ex.'
                },
                {
                    question: 'Can I cancel my order?',
                    answer: 'In luctus lectus, tempor at, eros. Nunc velit turpis, interdum a mi sit amet, facilisis elementum ex. Nunc vulputate nibh a nisi tempus semper. Morbi nisl leo, pharetra quis dignissim eu, lacinia vel turpis. Nunc eu tempus enim. Curabitur id quam at tortor faucibus faucibus. Vestibulum sit amet amet felis nec a risus.'
                }
            ]
        };
    }
};
</script>

<style scoped>
.faq {
    text-align: center;
    padding-top: 140px;
    padding-bottom: 100px;
    max-width: 900px;
}

.title-container {
    position: relative;
    display: inline-block;
    margin-bottom: 40px;
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



.breadcrumb-item {
    color: #666;
    font-size: 14px;
}

.breadcrumb-item:not(.v-breadcrumbs-item--disabled) {
    color: #8b7355;
}

.faq-panels {
    text-align: left;
}

.faq-panel {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9f5;
}

.faq-title {
    background-color: #d8dccf !important;
    color: #333 !important;
    padding: 16px 20px;
}

.faq-title:hover {
    background-color: #d0d4c7 !important;
}

.faq-content {
    background-color: white;
    color: #666;
    line-height: 1.6;
}

/* Custom icon styling */
:deep(.v-expansion-panel-title__icon) {
    color: #333;
}

/* Remove default Vuetify expansion panel styling */
:deep(.v-expansion-panel) {
    box-shadow: none !important;
}

:deep(.v-expansion-panel-title) {
    min-height: auto;
}

:deep(.v-expansion-panel-text__wrapper) {
    padding: 0;
}
</style>