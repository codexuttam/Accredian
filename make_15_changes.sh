#!/bin/bash
set -e

# Change 1
sed -i 's/Our Proven/Our Valued/' src/components/home/Partners.tsx
# Change 2
sed -i "s/Industry\&apos\;s Best/World\&apos\;s Best/" src/components/home/Partners.tsx
# Change 3
sed -i 's/bg-white overflow-hidden/bg-gray-50 overflow-hidden/' src/components/home/Partners.tsx

# Change 4
sed -i 's/Skill Gap Analysis/Comprehensive Skill Analysis/' src/components/home/HowItWorks.tsx
# Change 5
sed -i 's/Flexible Program Delivery/Adaptive Program Delivery/' src/components/home/HowItWorks.tsx
# Change 6
sed -i 's/text-3xl md:text-5xl/text-4xl md:text-5xl/' src/components/home/HowItWorks.tsx

# Change 7
sed -i 's/Privacy Policy/Our Privacy Policy/' src/app/privacy/page.tsx
# Change 8
sed -i 's/April 2026/May 2026/' src/app/privacy/page.tsx
# Change 9
sed -i 's/4. Data Security/4. Your Data Security/' src/app/privacy/page.tsx

# Change 10
sed -i 's/Accredian Enterprise | Expert Training for High-Performance Teams/Accredian Enterprise - Expert Training/' src/app/layout.tsx
# Change 11
sed -i 's/className="scroll-smooth"/className="scroll-smooth antialiased"/' src/app/layout.tsx

# Change 12
sed -i 's/Accredian Enterprise Website Recreation/Accredian Enterprise Web Application/' README.md
# Change 13
sed -i 's/high-fidelity recreation/premium recreation/' README.md
# Change 14
sed -i 's/Next.js 14/Next.js/' README.md
# Change 15
sed -i 's/Developed by \*\*Uttam\*\*/Developed by **Uttam** and Team/' README.md

git add .
git commit -m "Applied 15 core changes across components, layout, and README"
git push

echo "Successfully made 15 core changes and pushed to GitHub."
