# 치이카와 무빙 웹포스터 — 실행과 코드 이해

## 바로 실행
1. ZIP 전체를 압축 해제합니다. ZIP 내부에서 HTML만 열지 마세요.
2. moving-poster-v3 안의 index.html을 Chrome으로 엽니다.
3. 약 3초 뒤, 치이카와 손에 있는 분홍색 비늘을 클릭합니다.
4. 비늘이 하늘로 날아오르고 제목이 나타납니다. 오른쪽 아래 '다시 보기'로 재시작합니다.
별도 설치와 인터넷 연결은 필요 없습니다. jQuery 3.7.1이 포함되어 있습니다.

## v3 수정 사항
브라우저의 실제 작업 영역을 100vw × 100vh로 채웁니다. 이전의 좌우 파란 여백을 제거했습니다.
배경은 무대에 맞춰지고 캐릭터는 이미지 고유 비율을 유지합니다.
시마지로+새를 좌우 캐릭터 그룹 밖의 독립 레이어로 옮기고 크기를 명시했습니다.
시마지로 하체 앞에는 바위 이미지 일부를 겹치며 새는 오른쪽 어깨 뒤에 있습니다.
치이카와 너비를 무대의 19%에서 28%로 확대하고 비늘은 치이카와 너비의 6.5%로 줄였습니다.
치이카와와 비늘을 같은 묶음으로 배치해 크기가 변해도 손 위치를 따라갑니다.
비늘은 클릭 즉시 6.5초 동안 떠올라 화면 밖으로 이동합니다.

## 파일별 역할
- index.html: 이미지, 그룹, 버튼, 제목을 배치하는 HTML 구조
- style.css: 위치, 크기, 겹치는 순서, 반복 애니메이션, 등장 효과
- js/script.js: jQuery 클릭 이벤트와 클래스 전환, 다시 보기
- js/jquery-3.7.1.min.js: 공식 배포 라이브러리(수정하지 않음)
- images: 제공한 PNG. 캐릭터의 투명 바깥 여백은 정리했고 배경은 전체 캔버스를 유지했습니다.

## 5분 안에 이해하는 작동 방식
1. .poster는 화면 전체 크기의 무대이고 position: relative가 좌표 기준입니다.
2. 각 이미지는 position: absolute와 left/top/width로 배치합니다.
3. z-index 숫자가 클수록 앞에 보입니다. 새보다 시마지로를 앞에, 아저씨 하체보다 바위를 앞에 놓았습니다.
4. HTML이 준비되면 jQuery의 addClass('opened ready')로 좌우 이동과 클릭 안내를 시작합니다.
5. transition은 위치나 투명도의 변화를 부드럽게 이어줍니다.
6. @keyframes와 animation은 캐릭터 둥실거림, 파도, 비늘 상승을 표현합니다.
7. on('click', function () {...})은 교수님 mousemove 예시와 구조가 같습니다. 이벤트 종류만 click입니다.
8. 클릭하면 addClass('launched')를 실행합니다. 비늘과 제목의 CSS가 동시에 작동합니다.
9. 제목에는 transition-delay: 2.1s가 있어서 비늘보다 늦게 나타납니다. JavaScript 타이머는 없습니다.
10. 다시 보기는 location.reload()로 페이지를 새로 불러옵니다.

### 발표 때 직접 짚을 코드
$('#scaleButton').on('click', function () { ... });
→ 비늘 버튼에서 클릭을 감지합니다.
$('#poster').addClass('launched');
→ 포스터에 상태를 표시하는 클래스를 붙입니다.
.launched .scale-button { animation: fly 6.5s linear forwards; }
→ 비늘이 fly라는 움직임으로 6.5초 동안 올라갑니다. forwards는 마지막 위치 유지입니다.
.launched .title-block { opacity: 1; transform: translateY(0); transition-delay: 2.1s; }
→ 제목은 2.1초 기다린 후 투명 상태에서 나타납니다.

## 자주 수정하는 곳
- 캐릭터 위치: style.css의 .usagi / .hachiware 등에서 left, top 수정
- 캐릭터 크기: 같은 선택자의 width 수정
- 양옆으로 더 벌리기: --open-distance: 76px를 100px 등으로 수정
- 전체 반복 속도: .character의 4.8s (숫자가 클수록 느림)
- 비늘 위치: .scale-button의 left와 top
- 제목 위치: .title-block의 top
- 비늘 궤적: @keyframes fly의 translate / rotate 값
- 제목 등장 시점: style.css의 transition-delay: 2.1s
- 클릭 안내 등장 시점: style.css의 transition-delay: 2.6s

## 발표 준비
본인이 만든 시안과 이미지 분리 작업, 클릭 아이디어를 먼저 설명하세요.
그다음 코드에서 실제로 이해한 부분을 직접 짚어 설명하고, AI 도움을 받은 범위도 수업 방침에 맞게 밝히세요.
발표 전에 위치나 속도를 한 가지 직접 수정해 보세요. 변경 전후 차이를 설명할 수 있으면 좋습니다.
핵심 설명: 'jQuery는 클릭을 감지하고 클래스를 추가하며, CSS가 그 클래스에 해당하는 움직임을 표현한다.'

## 참고한 공식 문서
- jQuery .on(): https://api.jquery.com/on/
- jQuery .addClass(): https://api.jquery.com/addClass/
- MDN transition: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition
- MDN CSS animation: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation

## GitHub 제출
이 ZIP은 로컬 실행용 완성 파일이며 GitHub에 자동 업로드되지는 않았습니다.
기존 과제 저장소의 루트에 index.html, style.css, images 폴더, js 폴더를 함께 업로드하세요.
Settings → Pages에서 배포할 브랜치와 루트를 선택한 뒤, 생성된 사이트 주소를 실제로 열어 클릭 동작을 확인하세요.
제출할 때는 저장소 주소가 아닌 실행되는 홈페이지 주소를 사용합니다.
PNG와 파일명의 대소문자를 바꾸면 HTML의 경로도 똑같이 바꿔야 합니다.

## 정보 표기
제공된 시안에 맞춰 7.24 FRI를 표시했습니다. 한국 실제 개봉일을 확인한 표기는 아닙니다.
원작 이미지 기반 비공식 수업 과제입니다. 제공된 로고 원본을 그대로 사용했습니다.
