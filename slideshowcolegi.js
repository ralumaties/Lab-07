var slideIndex=0
showSlidesColegi();

function showCatalog()
{
	var i;
	var slides=document.getElementByClassName("mySlides");
	for(i=0; i<slides.length; i++)
	{
		slides[i].style.display="none";
	}
	slideIndex++;
	if (slideIndex > lides.length)
	{
		slideIndex=1;
	}
	slides[slideIndex-1].style.display="block";
	setTimeout(showSlidesColegi,3000);
}