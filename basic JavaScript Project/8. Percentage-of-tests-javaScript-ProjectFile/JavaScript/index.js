(function () {
  // دریافت المان‌های ورودی و دکمه و نمایشگر
  const totalInput = document.getElementById("totalTests");
  const correctInput = document.getElementById("correctTests");
  const wrongInput = document.getElementById("wrongTests");
  const calcBtn = document.getElementById("calcBtn");
  const percentDisplay = document.getElementById("percentValue");
  const detailInfo = document.getElementById("detailInfo");

  // تابع محاسبه درصد (ساده و غیر پیچیده)
  function calculatePercent() {
    // دریافت مقدارها به صورت عدد اعشاری (برای دقت بیشتر)
    const total = parseFloat(totalInput.value);
    const correct = parseFloat(correctInput.value);
    const wrong = parseFloat(wrongInput.value);

    // بررسی کنید که همه اعداد معتبر هستند
    if (isNaN(total) || isNaN(correct) || isNaN(wrong)) {
      percentDisplay.textContent = " خطا";
      detailInfo.textContent = "لطفاً همه فیلدها را عدد وارد کنید";
      return;
    }

    // اگر تعداد کل صفر یا منفی باشد، نمایش خطا
    if (total <= 0) {
      percentDisplay.textContent = " نامعتبر";
      detailInfo.textContent = "تعداد کل باید بزرگتر از صفر باشد";
      return;
    }

    // بررسی منطقی: مجموع درست + غلط نباید بیشتر از کل باشد (اخطار غیرفعال نیست، ولی محاسبه را بر اساس کل انجام می‌دهیم)
    // اما اگر کاربر اعداد غیرمنطقی وارد کند، باز هم درصد را بر اساس کل محاسبه می‌کنیم.
    // (برای سادگی، فقط اخطار می‌دهیم ولی محاسبه را انجام می‌دهیم)
    const sumCorrectWrong = correct + wrong;
    if (sumCorrectWrong > total) {
      // صرفاً هشدار در قسمت detail نشان می‌دهیم (اما محاسبه را بر اساس total انجام می‌دهیم)
      detailInfo.textContent = ` مجموع درست+غلط (${sumCorrectWrong}) از کل بیشتر است`;
    } else {
      detailInfo.textContent = ` مجموع درست و غلط: ${sumCorrectWrong} از ${total}`;
    }

    // محاسبه درصد با دقت ۲ رقم اعشار (نسبت به کل)
    let percent = (correct / total) * 100;
    // اگر درصد NaN یا بینهایت نشود
    if (!isFinite(percent)) {
      percentDisplay.textContent = " خطا";
      detailInfo.textContent = "مقادیر نامعتبر";
      return;
    }

    // گرد کردن به دو رقم اعشار
    percent = Math.round(percent * 100) / 100;

    // نمایش درصد به همراه علامت ٪
    percentDisplay.textContent = percent + "%";

    // اگر عدد صحیح باشد، فرمت ساده‌تر (اختیاری)
    // اما همان عدد را نشان می‌دهیم
    // همچنین اگر درصد بین ۰ تا ۱۰۰ نبود، هشداری نشان نمی‌دهیم چون ممکن است خطای ورودی باشد.
  }

  // افزودن رویداد کلیک به دکمه
  calcBtn.addEventListener("click", calculatePercent);

  // (اختیاری) در صورت تغییر ورودی‌ها، بلافاصله محاسبه نشود، فقط با کلیک دکمه.
  // اما برای راحتی کاربر، می‌توان هنگام تغییر نیز محاسبه کرد (اختیاری)
  // اینجا طبق دستور فقط دکمه را فعال می‌گذاریم.
  // ولی برای تجربه بهتر، می‌توان با کلید Enter هم محاسبه کرد:
  const inputs = [totalInput, correctInput, wrongInput];
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        calculatePercent();
      }
    });
  });

  // یک بار در شروع، مقداردهی اولیه با اعداد پیش‌فرض (که در html مقدار دهی شده)
  // برای اینکه خالی نباشد، مقداردهی اولیه انجام می‌شود.
  // اما مطمئن می‌شویم که اعداد پیش‌فرض (۲۰، ۱۴، ۶) نمایش داده شوند.
  // برای اطمینان، یک بار محاسبه را اجرا می‌کنیم تا خروجی نشان داده شود.
  // این کار بدون نیاز به کلیک کاربر، درصد اولیه را نشان می‌دهد.
  window.addEventListener("DOMContentLoaded", function () {
    // تنظیم مقادیر پیش‌فرض (اگر خالی باشند)
    if (totalInput.value === "") totalInput.value = "20";
    if (correctInput.value === "") correctInput.value = "14";
    if (wrongInput.value === "") wrongInput.value = "6";
    calculatePercent();
  });
})();
