![header](https://capsule-render.vercel.app/api?type=waving&color=0A84FF&height=300&section=header&text=myElecCar&fontSize=90&fontColor=fff)

![logo](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/25d82a4716a6d9d311e0141920ff61ce/Group_21.png)

# Team11(열일) - myElecCar 

###  myElecCar 는 유저의 성향, 현재 차량, 주유 내역 등을 토대로<br/><br/> 유저에게 적합한 전기차를 추천해주는 인공지능 서비스 입니다

<br/>

## 사이트 링크
**:point_right:  [myElecCar 서비스 보러 가기](http://kdt-ai5-team11.elicecoding.com) :point_left:**

<br/>

#### 서비스 미리보기
![service pic](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/0900f4be37c5e34342e59fd87b21f201/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_052144.png)

<br/>





## 😉 팀원

| 프론트, 인공지능 | 프론트 | 프론트 | 프론트, 백엔드 |
| --- | --- | --- | --- |
| 최은오 | 최영현 | 이재경 | 류지윤 |

<br/>

## :calendar_spiral: 개발 기간 (5주)

###   2022/11/14 ~ 2022/12/16
- 1~2주차 : 기획, 디자인
- 3~4주차 : 주요 기능 개발
- 5주차 : 기능 점검, UI 수정, 배포

<br/>

## ⚙ 사용 언어

| 💻 프론트엔드 | 💾 백엔드 | 🤖 인공지능 |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/React-black?style=flat-square&logo=React&logoColor=61dbfb"/> <br/> <img src="https://img.shields.io/badge/TypeScript-white?style=flat&logo=TypeScript&logoColor=#3178C6"/>| <img src="https://img.shields.io/badge/ExpressJs-lightgrey?style=flat&logo=Express&logoColor=black"/> <br/> <img src="https://img.shields.io/badge/MongoDB-lightgrey?style=flat&logo=MongoDB&logoColor=green"/> | <img src="https://img.shields.io/badge/TensorFlow-3178C6?style=flat&logo=TensorFlow&logoColor=#FF6F00"/><br/>  <img src="https://img.shields.io/badge/Python-ffffff?style=flat&logo=Python&logoColor=#3776AB"/>|

<br/>

## 📃 API 문서

[myElecCar BE API](https://www.notion.so/elice/BE-API-eff46ad7b4ed4b64b8c3819842262af1)

<br/>

# 👑 핵심 서비스
## 3가지 전기차 추천 플로우
### 🚩 현재 차량을 등록하여 등록한 차량의 브랜드와 모델을 인공지능 모델로 예측합니다
- 회원가입 시, 현재 차량 소지 여부를 확인 후, 차량이 없다면 본인이 원하는 드림카를 업로드 하도록 유도합니다.
<br/>
<br/>
![flow_1](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/7e3f7997da0a0d59a1e527b932c42c9a/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_052921.png)

<br/>
<br/>

### 🚩 간단한 성향 테스트를 통해 사용자의 구매 성향을 파악합니다

<br/>
<br/>
![flow_2](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/6e12a8b8e1bd26d54707c98cf70e0fa3/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_053055.png)
<br/>
<br/>


### 🚩 현재 보유 중인 차량의 실제 연비를 계산하여 추천합니다
- 차량을 소지한 경우 주유 내역을 통해 연비를 계산 후, 그에 해당하는 전비를 가진 전기차를 추천해드립니다.
<br/>
<br/>

![flow_3](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/bbf67b84c1d6608539b279dd481884c1/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_053214.png)
<br/>
<br/>
<br/>

## 🌡 인공지능 학습 과정
<br/>

#### 사용 모델 : ResNet 50 
#### 데이터 셋 : 2019 ~ 2022년 동안 출시된 국내 차량 31총 크롤링

<br/> 
<br/> 

### 📈 모델 학습 결과
<br/>

![7-1](https://user-images.githubusercontent.com/64246481/212704025-70e5dd63-e84e-4e1b-a77b-4055a76bb38a.png)

![7-2](https://user-images.githubusercontent.com/64246481/212704005-949c4a9d-e68e-4899-8b5b-b7383c6ae953.png)

<br/>
<br/>

### 📊 학습된 모델로 평가 결과

<br/>

![model_result](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/a0d57971ac8ac4903be8c04697d8a695/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_104113.png)
<br/>
<br/>

## 추가 기능

### 💬 챗봇 기능 구현
#### 전기차에 관련된 간단한 정보를 알려드릴 수 있도록 메인 화면에 챗봇 서비스를 제공합니다.
<br/>
<br/>

![chat_bot](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/d35694dd51b5e88d0b829a65bbee4925/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_052734.png)
<br/>
<br/>
<br/>

### 💌 카카오톡 공유 기능
#### 지인에게 서비스를 추천할 수 있도록 카카오톡 공유 기능을 제공합니다
<br/>
<br/>

![kakao_share](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team11/11/uploads/ecf717f62e089f10ebd4876f39773855/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2022-12-17_104753.png)



