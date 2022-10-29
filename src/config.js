export const configuration = {
	about: {
		title: 'hello, i am christian',
		titleAling: '',
		paraAlign: '',
    paraWidht: '',
    float: '',
		para: function () {
			return (
				<>
					<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
					<div>After working for years in the world of large-scale distribution and logistics,
						I decided to change my life by dedicating myself to my greatest passion, web development,
						and luckily it turned out to be a wonderful decision.</div>
					<div>Thanks to my work experiences I have acquired great skills in Problem Solving
						and a strong propensity to work in a team.</div>
					<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
				</>
			)
		},
	},
	career: {
		title: 'career objective',
		titleAlign: 'text-right',
		paraAlign: 'text-right',
    paraWidht: '',
    float: '',
		para: function () {
			return (
				<>
					<div>Junior Full-Stack developer based in Rome. Great lover of Music, Art and Astrophysics</div>
					<div>After working for years in the world of large-scale distribution and logistics,
						I decided to change my life by dedicating myself to my greatest passion, web development,
						and luckily it turned out to be a wonderful decision.</div>
					<div>Thanks to my work experiences I have acquired great skills in Problem Solving
						and a strong propensity to work in a team.</div>
					<div>If you're looking for a developer to add to your team I'd love to hear from you.</div>
				</>
			)
		}
	},
	style: {
		fontTitle: 'font-blucobra',
		textColorTitle: 'text-amber-500',
		textSizeTitle: 'text-7xl',
		fontPara: 'font-para',
		textColorPara: 'text-white',
		textSizePara: 'text-xl',
	},
	animation: {
		title: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 2,
					ease: 'linear'
				}
			}
		},
		para: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 3,
					ease: 'linear'
				}
			}
		}
	}
}