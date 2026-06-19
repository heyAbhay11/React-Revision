import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { Gamepad2Icon, ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Star } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { Users } from 'lucide-react';
import { Network } from 'lucide-react';
import { Info } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';


const GamesDetails = () => {

  const {data} = useLoaderData()
  console.log(data)

  const params = useParams()
  
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">


      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden aspect-21/9 mb-12 shadow-2xl">
          <img
            src={data.background_image_additional}
            alt="Cyberpunk"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase rounded tracking-wider">
                  Editor&apos;s Choice
                </span>

                <div className="flex items-center gap-1 text-yellow-400">
                  <span className="material-symbols-outlined text-sm">
                    <Star size={12} />
                  </span>

                  <span className="text-sm font-semibold text-white">4.9</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                {data.name}
              </h1>

              <p className="text-slate-300 mt-2 font-medium">
                {data.released}
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white/10 hover:bg-primary/90  hover:bg-blue-400 text-white text-xl font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">
                     <ShoppingCart />
                </span>
                Buy Now
              </button>

              <button className="bg-white/10 hover:bg-blue-400 backdrop-blur-md text-xl text-white font-bold py-3 px-6 rounded-xl border border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined"><Heart /></span>
                Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  <FileText />
                </span>
                About the Game
              </h2>

              <div className="text-slate-400 leading-relaxed space-y-4">
                <p>
                  {data.description_raw}
                </p>

                <p>
                  The relationships you build and the choices you make will
                  shape the story and the world around you.
                </p>
              </div>
            </section>

            {/* Features */}
            <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary mb-2">
                  <Laptop />
                </span>

                <p className="text-xs text-slate-500 font-medium">
                  Platforms
                </p>

                <p className="text-sm font-bold">
                  PC, PS5, Xbox Series X
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary mb-2">
                   <Network />
                </span>

                <p className="text-xs text-slate-500 font-medium">Genre</p>

                <p className="text-sm font-bold">Action RPG, Open World</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary mb-2">
                  <Users />
                </span>

                <p className="text-xs text-slate-500 font-medium">Players</p>

                <p className="text-sm font-bold">Single-player</p>
              </div>
            </section>

            {/* Media */}
            <section>
              <h2 className="text-xl font-bold mb-6">Media Gallery</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
                  <img
                    src={data.background_image}
                    alt="gallery"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
                  <img
                    src={data.background_image_additional}
                    alt="gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Reviews */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-6">Player Reviews</h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl font-black text-primary">{data.rating}</div>

                <div>
                  <div className="flex text-primary gap-1">
                    <span className="material-symbols-outlined"><Star size={16} /></span>
                    <span className="material-symbols-outlined"><Star size={16} /></span>
                    <span className="material-symbols-outlined"><Star size={16} /></span>
                    <span className="material-symbols-outlined"><Star size={16} /></span>
                    <span className="material-symbols-outlined">
                      <Star size={16} />
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 font-medium">
                    {data.reviews_count} reviews
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[90, 6, 2].map((percent, i) => (
                  <div
                    key={i}
                    className="grid  grid-cols-[20px_1fr_40px] items-center gap-4"
                  >
                    <span className="text-xs font-bold">{5 - i}</span>

                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${percent}%` }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>

                    <span className="text-xs text-slate-500 text-right">
                      {percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Tags</h3>

              <div className="flex flex-wrap gap-2">
                 
                {data.tags.map((tag,index) => (
                  <span
                    key={tag.id||index}
                    className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-xs font-semibold rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="p-6 rounded-2xl bg-[#0F172B]  ">
              <div className="flex items-center gap-3 mb-2 text-primary">
                <span className="material-symbols-outlined"><Info /></span>

                <h3 className="font-bold">System Requirements</h3>
              </div>

              <p className="text-sm text-slate-400">
                Requires a 64-bit processor and operating system.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-1 rounded">
                  <span className="material-symbols-outlined text-white text-xl">
                      <Gamepad2 />
                  </span>
                </div>

                <span className="text-lg font-bold tracking-tight">
                  GameVault
                </span>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                The ultimate destination for game discovery.
              </p>
            </div>

            {["Explore", "Support", "Legal"].map((section) => (
              <div key={section}>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                  {section}
                </h4>

                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-primary transition-colors"
                    >
                      Top rated
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2024 GameVault Inc. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-xl">
                  
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GamesDetails
