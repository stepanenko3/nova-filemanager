<template>
    <div
        class="absolute inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg w-full h-full border-2 border-primary-500"
    >
        <Icon
            type="upload"
            class="pointer-events-none text-primary-500 animate-bounce mr-4"
            width="48"
            height="48"
        />
        <span class="pointer-events-none"> Drop your files here </span>
    </div>
</template>

<style>
.pointer-events-none {
    pointer-events: none;
}

@keyframes bounce {
    0%,
    to {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
.animate-bounce {
    animation: bounce 1s infinite;
}
</style>
