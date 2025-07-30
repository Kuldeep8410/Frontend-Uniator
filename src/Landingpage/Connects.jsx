import React, { useState } from 'react';
import { Twitter, Github, Linkedin, Instagram, ExternalLink, Heart, Users } from 'lucide-react';

function Connects() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const socialLinks = [
        {
            name: 'Twitter',
            icon: Twitter,
            href: '#',
            gradient: 'from-blue-400 via-blue-500 to-blue-600',
            hoverGradient: 'from-blue-300 via-blue-400 to-blue-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/30',
            shadowColor: 'shadow-blue-500/25',
            description: 'Follow for updates',
            followers: '0'
        },
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/Kuldeep8410',
            gradient: 'from-gray-400 via-gray-500 to-gray-700',
            hoverGradient: 'from-gray-300 via-gray-400 to-gray-600',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-gray-500/30',
            shadowColor: 'shadow-gray-500/25',
            description: 'Check my repos',
            followers: '0K'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: '#',
            gradient: 'from-blue-600 via-blue-700 to-blue-800',
            hoverGradient: 'from-blue-500 via-blue-600 to-blue-700',
            bgColor: 'bg-blue-600/10',
            borderColor: 'border-blue-600/30',
            shadowColor: 'shadow-blue-600/25',
            description: 'Professional network',
            followers: '0'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: '#',
            gradient: 'from-pink-500 via-purple-500 to-orange-500',
            hoverGradient: 'from-pink-400 via-purple-400 to-orange-400',
            bgColor: 'bg-gradient-to-br from-pink-500/10 to-purple-500/10',
            borderColor: 'border-pink-500/30',
            shadowColor: 'shadow-pink-500/25',
            description: 'Visual content',
            followers: '0'
        }
    ];

    return (
        <div className="relative min-h-screen bg-base-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <Users className="w-8 h-8 text-purple-400 animate-pulse" />
                        <Heart className="w-6 h-6 text-pink-400 animate-bounce" />
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                            Connect With My
                        </span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Community!
                        </span>
                    </h2>
                    
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join thousands of developers, creators, and innovators in our growing community. 
                        Let's build something amazing together!
                    </p>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        const isHovered = hoveredCard === index;
                        
                        return (
                            <div
                                key={social.name}
                                className={`group relative overflow-hidden ${social.bgColor} backdrop-blur-lg border ${social.borderColor} rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${social.shadowColor} cursor-pointer transform hover:-translate-y-2`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                }}
                            >
                                {/* Background gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${isHovered ? social.hoverGradient : social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                {/* Glowing border effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                    {/* Icon with animated background */}
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110`}></div>
                                        <div className={`relative bg-gradient-to-r ${social.gradient} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                                            <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                                        </div>
                                    </div>
                                    
                                    {/* Platform name */}
                                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                                        {social.name}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                                        {social.description}
                                    </p>
                                    
                                    {/* Followers count */}
                                    <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                                        <Users className="w-4 h-4" />
                                        <span>{social.followers} followers</span>
                                    </div>
                                    
                                    {/* Connect button */}
                                    <a
                                        href={social.href}
                                        className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${social.gradient} text-white font-semibold rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:shadow-lg hover:scale-105`}
                                    >
                                        <span>Connect</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                                
                                {/* Animated corner accents */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-lg mb-6">
                        Ready to collaborate? Let's create something extraordinary!
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-purple-400">
                        <Heart className="w-5 h-5 animate-pulse" />
                        <span className="text-sm">Made with love for the community</span>
                        <Heart className="w-5 h-5 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connects;