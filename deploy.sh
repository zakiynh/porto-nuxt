#!/bin/bash

echo "🚀 Preparing Portfolio for Deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio with Vue theme"
else
    echo "📁 Git repository already exists"
    git add .
    git commit -m "Portfolio ready for deployment - Vue theme with modern fonts"
fi

echo "✅ Portfolio is ready for deployment!"
echo ""
echo "🌟 Next Steps:"
echo "1. Create a GitHub repository"
echo "2. Push your code:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy options:"
echo "   🔥 Vercel (Recommended): https://vercel.com"
echo "   🎯 Netlify: https://netlify.com"
echo "   📦 GitHub Pages: Enable in repository settings"
echo ""
echo "🎉 Your portfolio will be live in minutes!"
