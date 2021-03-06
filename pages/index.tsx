import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useResetRecoilState } from 'recoil';
import { allAnswerState } from '../states';
import { MainLogo, BigCircle, SmallCircle } from '../public/assets/images';

const MainWrap = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: #f1f7ff;

	.header {
		z-index: 999;
		margin-bottom: 280px;
	}

	.container {
		margin-top: 60px;
	}

	.main__title {
		color: black;
		font-size: 50px;
		line-height: 104px;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.main__title--sub1 {
		color: #0d0c22;
		font-size: 18px;
		line-height: 26px;
		text-align: center;
		font-family: 'Noto Sans KR', sans-serif;
	}
	.main__title--sub2 {
		color: #0d0c22;
		font-size: 18px;
		line-height: 26px;
		text-align: center;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.game__start {
		display: inline-block;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		border-radius: 20px;
		background: #ffaf02;
		height: 4rem;
		font-size: 1.5rem;
		font-size: 18px;
		padding: 0 80px;
		color: white;
		margin-top: 50px;
		cursor: pointer;
		font-family: 'Noto Sans KR', sans-serif;
	}

	.footer {
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 14px;
		color: #767676;
		bottom: 0;
		width: 100%;
		margin-top: 40px;
	}
`;

const HomeBigBackground = styled.img`
	position: absolute;
	bottom: 0px;
	right: 0px;
	width: 400px;
	@media (max-width: 1440px) {
		width: 800px;
	}
	@media (max-width: 1140px) {
		width: 640px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const HomeSmallBackground = styled.img`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 880px;
	@media (max-width: 1440px) {
		width: 800px;
	}
	@media (max-width: 1140px) {
		width: 640px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

function Main() {
	const resetAllAnswer = useResetRecoilState(allAnswerState);

	return (
		<MainWrap>
			<div className="header">
				<section className="container">
					<MainLogo />
					<div className="main_titles">
						<img
							style={{ marginTop: '24px', height: '60px', marginBottom: '48px' }}
							src="/assets/images/main-title.svg"
						/>
						<div className="main__title--sub1">
							???...???...???....???!!! ?????? ????????? ??? 3??? ?????? ?????? ????????? ?????? ??????!
						</div>
						<div className="main__title--sub2">?????? ?????? ??????!</div>
					</div>
					<Link href="/question">
						<a className="game__start" onClick={resetAllAnswer}>
							????????????
						</a>
					</Link>
				</section>
			</div>
			<HomeSmallBackground src={SmallCircle} />
			<HomeBigBackground src={BigCircle} />
		</MainWrap>
	);
}

export default Main;
