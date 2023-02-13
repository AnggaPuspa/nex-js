import React from 'react'

const sekolah = () => {
  return (
    <section id='education' >
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5b">
					<h3 className="text-3xl font-semibold">educ<span className="bg-span">ation</span></h3>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 ">
					<div>
						<h3 className="text-xl font-semibold tracking-wide">2012 - 2018 </h3>
                        <h2 className="text-medium font-semibold  tracking-wide uppercase text-font1"> <a   href="https://goo.gl/maps/GfEJhd3WdNcdV8B9A">Sd 2 negri kebon Padangan</a></h2>
						<p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque saepe necessitatibus, numquam accusantium magni veritatis dolorum!</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold tracking-wide">2018 - 2021</h3>
                        <h2 className="text-medium font-semibold  tracking-wide uppercase text-font1"> <a   href="https://goo.gl/maps/rRAMaY5TrwhBgh2CA">Smp Negri 4 Pupuan</a></h2>
						<p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque saepe necessitatibus, numquam accusantium magni veritatis dolorum!</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold tracking-wide">2021 - Now</h3>      
						<h2 className="text-medium  font-semibold  tracking-wide uppercase text-font1"> <a   href="https://goo.gl/maps/eTtKAUuVqBF6hExR7">Smk Ti Bali Global Badung</a></h2>
						<p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque saepe necessitatibus, numquam accusantium magni veritatis dolorum!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default sekolah
