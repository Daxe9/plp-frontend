import "./Home.css";

function Home() {
	// const imagesPaths = [
	// 	"../assets/images/6-min.jpg",
	// 	"../assets/images/7-min.jpg",
	// 	"../assets/images/8-min.jpg",
	// 	"../assets/images/10.jpg.webp",
	// 	"../assets/images/11-min.jpg",
	// 	"../assets/images/12-min.jpg",
	// 	"../assets/images/13-min.jpg",
	// 	"../assets/images/14.avif",
	// 	"../assets/images/15-min.jpg",
	// 	"../assets/images/16-min.jpg",
	// 	"../assets/images/17-min.jpg",
	// 	"../assets/images/18-min.jpg",
	// 	"../assets/images/1.jpg",
	// 	"../assets/images/19-min.jpg",
	// 	"../assets/images/20-min.jpg",
	// 	"../assets/images/22-min.jpg",
	// 	"../assets/images/23-min.jpg",
	// 	"../assets/images/24-min.jpg",
	// 	"../assets/images/25-min.jpg",
	// 	"../assets/images/26-min.jpg",
	// 	"../assets/images/27-min.jpg",
	// 	"../assets/images/28-min.jpg",
	// 	"../assets/images/29-min.jpg",
	// 	"../assets/images/30.webp",
	// 	"../assets/images/2-min.jpg",
	// ];
	const imageIds = [
		[1, 2, 3],
		[4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20, 21, 22],
		[23, 24, 25],
	];

	const images = import.meta.glob<{ default: string }>(
		"../../assets/images/homePageScrollingImages/*.jpg",
		{
			eager: true,
		},
	);

	const getImage = (id: number) => {
		return images[`../../assets/images/homePageScrollingImages/${id}.jpg`]?.default;
	};

	const rows = imageIds.map((row, rowId) => {
		return (
			<div className="row" key={rowId}>
				{row.map((id) => {
					return (
						<div className="row__item" key={id}>
							<div className="row__item-inner">
								<div
									className="row__item-img"
									style={{
										backgroundImage: `url(${getImage(id)})`,
									}}
								></div>
							</div>
						</div>
					);
				})}
			</div>
		);
	});

	return (
		<>
			<main>
				<section className="intro">
					<div className="grid">{rows}</div>
					<div className="fullview"></div>
					<div className="enter glassEffect has-text-centered">
						<span className="container">
							<figure className="image is-128x128 centerImage">
								<img
									className="is-rounded is-1by1"
									src="../assets/images/logo.png"
								/>
							</figure>
							<p
								className="title centerImage"
								style={{
									marginTop: "5%",
									marginBottom: "3%",
									color: "aliceblue",
								}}
							>
								Passion Lab Polimi
							</p>
							<p
								className="subtitle centerImage lxgw-wenkai-tc-regular"
								style={{ color: "rgb(221, 221, 221)" }}
							>
								where passion sprout
							</p>

							<button
								id="homeMainButton"
								className="button is-primary is-large lxgw-wenkai-tc-regular"
							></button>
						</span>
					</div>
				</section>
				<section className="content">
					<div className="content__header">
						<h2 id="homeCard1Title"></h2>
					</div>
					<div className="content__text lxgw-wenkai-tc-regular">
						<p className="buttons level-item has-text-centered">
							<a
								id="homeCard1Button1"
								className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect"
								href="./wechatgroups.html"
							></a>
							<a
								id="homeCard1Button2"
								className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect"
								href="./workInProgress.html"
							></a>
							<a
								id="homeCard1Button3"
								className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect"
								href=""
							></a>
							<a
								id="homeCard1Button4"
								className="button is-success is-medium lxgw-wenkai-tc-regular glassEffect"
								href="./workInProgress.html"
							></a>
						</p>
						<p className="right" id="homeCard1Text1"></p>
						<p className="highlight">
							What matters most is how the journey allows your passions to bloom,
							transforming you into your own firework 🎆
						</p>
						<p>More are coming!!</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default Home;
