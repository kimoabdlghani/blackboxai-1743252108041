// Sample data for subjects
const subjects = [
    {
        id: 1,
        name: "اللغة العربية",
        description: "شرح كامل لمنهج اللغة العربية للثانوية العامة",
        lessonsCount: 24,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-blue-100"
    },
    {
        id: 2,
        name: "اللغة الإنجليزية",
        description: "شرح منهج الإنجليزية مع تمارين وتطبيقات عملية",
        lessonsCount: 30,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-red-100"
    },
    {
        id: 3,
        name: "الرياضيات",
        description: "شرح مبسط لجميع فروع الرياضيات مع حلول نموذجية",
        lessonsCount: 45,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-green-100"
    },
    {
        id: 4,
        name: "الفيزياء",
        description: "شرح التجارب والنظريات الفيزيائية مع تطبيقات عملية",
        lessonsCount: 36,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-purple-100"
    },
    {
        id: 5,
        name: "الكيمياء",
        description: "شرح التفاعلات الكيميائية والمسائل الحسابية",
        lessonsCount: 28,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-yellow-100"
    },
    {
        id: 6,
        name: "الأحياء",
        description: "شرح مفصل لجميع فروع علم الأحياء",
        lessonsCount: 32,
        image: "https://images.unsplash.com/photo-1546412414-1b6d2c3b1e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "bg-indigo-100"
    }
];

// Function to render subject cards
function renderSubjects() {
    const container = document.getElementById('subjectsContainer');
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = `rounded-lg shadow-md overflow-hidden ${subject.color} dark:bg-gray-700`;
        card.innerHTML = `
            <img src="${subject.image}" alt="${subject.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">${subject.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${subject.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${subject.lessonsCount} درس</span>
                    <a href="#" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">استكشف</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderSubjects);