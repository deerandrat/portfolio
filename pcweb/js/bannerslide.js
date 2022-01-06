
/* 슬라이드 이미지2 기능 */
var slider = document.getElementById("slider"); //슬라이더 자체  M
var slidesItem = document.getElementById("slides"); //이미지 컨테이너

var allowShiftFlag = true; //슬라이드가 동작할 지 안할지 체크하는 변수 (나중에 설명)
var posInition = 0; //슬라이드가 시작하는 위치

var slides = document.getElementsByClassName("slide"); //div 배열
var slidesLength = slides.length; //이미지 갯수(배열)
var slideSize = slides[0].offsetWidth; //자신의 위치로부터 길이가 얼마나 되는지 측정.1116

var firstSlide = slides[0];
var lastSlide = slides[slidesLength-1];
var cloneFirstTag = firstSlide.cloneNode(true); // true : 자식노드 복제, false : 자신만 복제
var cloneLastTag = lastSlide.cloneNode(true);
// appendChild -> firstSlide 추가
slidesItem.appendChild(cloneFirstTag);
slidesItem.insertBefore(cloneLastTag, firstSlide);
// insertBefore -> lastSlide 추가
// 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다. 

var re_prev = document.getElementById("prevarrow");
var re_next = document.getElementById("nextarrow"); //슬라이더 조작버튼

var index=0; //이미지의 순서 번호
re_prev.addEventListener("click", function(){shiftSlide(-1); } );
re_next.addEventListener("click", function(){shiftSlide(1); } );

slidesItem.addEventListener("transitionend", checkIndex);

function shiftSlide(dir){ //-1 prev / 1 next
    //slidesItem은 이미지컨테이너.
    //애니메이션 효과 추가
    slidesItem.classList.add("shifting");

    if(allowShiftFlag){
        posInition = slidesItem.offsetLeft;
        //시작점을 이미지 컨테이너의 왼쪽 상단 꼭지점으로 잡는다.

        if(dir==1){
            //다음 슬라이드로 이동시킬 경우 이미지 컨테이너를 슬라이드 너비만큼 왼쪽으로 잡아당김(음수)
            slidesItem.style.left = (posInition - slideSize) + "px";
            index++;
        }else if(dir==-1){
            slidesItem.style.left = (posInition + slideSize) + "px";
            index--;
        }
        
    }
    allowShiftFlag = false; // 슬라이드 정지
    // 추가적으로 마지막 슬라이드 (추가1번)에서 맨처음(실제1번)-> 체크위채 이벤트
}

// 애니메이션 끝나고 이미지의 순서를 체크 함수
function checkIndex() {
    
    // 애니메이션 동작 멈춤
    slidesItem.classList.remove("shifting");
    if(index == slidesLength) { // 슬라이드 마지막 위치에 오면
        slidesItem.style.left = -(1 * slideSize) + "px";
        index=0;
    }

    if(index == -1) {
        slidesItem.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
    }

    allowShiftFlag = true; // 오동작을 막기 위한 변수
}