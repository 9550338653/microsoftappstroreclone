import React from 'react'
import './Freeapp.css'
export default function Freeapp() {
  return (
    <div className="free">
       <h1>Top Free apps</h1>
       <div className="card-container">
        <div className="card">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png"/>
            </div>
            <div>
                <h2>Whatsapp</h2>
                <p>Social</p>
            </div>
            <div>
                <button>Free</button>
            </div>
        </div>
        
    
    <div className="card">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
        </div>
        <div>
            <h2>Instagram</h2>
            <p>Social</p>
        </div>
        <div>
            <button>Free</button>
        </div>
    </div>
    

<div className="card">
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"/>
    </div>
    <div>
        <h2>Telegram</h2>
        <p>Social</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>


    </div>
    <div class="card-container">
        <div class="card">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkYPcernw8TurIQNE2-W0HVb4kjqivPUXMKjgpF3H&s"/>
            </div>
            <div>
                <h2>Netflix</h2>
                <p>Entertainment</p>
            </div>
            <div>
                <button>Free</button>
            </div>
        </div>
        
    
    <div class="card">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEPA92IL70bIkXU55UmxNzDBlHGRnLfNrMRQCRkNuDQ&s"/>
        </div>
        <div>
            <h2>Spotify</h2>
            <p>Entertainment</p>
        </div>
        <div>
            <button>Free</button>
        </div>
    </div>
    

<div class="card">
    <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA3lBMVEXt7e37DwH////u6+n7AAD7HxTt7e/r9vbq9/P5AAD8/////v/5EAH2AAD5///8DwDt8vL1///9//vt7uvs9PXw6+3ysKz5NS/xenbuw8Xv4d70Tkzt9ffwzsvyoqD1UUn7q6r4i4f63Nv8+Pb68Ozw7vX3cW/6JR3xwL/8Ozbo+fbt4uD1j4r4Mir0g4Pzq6T2WVj0wMbvs7P2gHnxmpj6zc/56eL74+L1m5L8mpr5UET62dj7vr38jY35ZGL7XVb6eHf2dmn9Q0L3jZL6YWL0Z2b0R0f44uT7wr/2r7FEz6L0AAAM+0lEQVR4nO2dC1fayhbHSRjAmcwjhJdFQYEU5AjqqSJ6UGq5tdXv/4Xu3pPw0HpFz00nSc1/tawlq8Xkx579mplMLpcpU6ZMmTJlypQpU6ZMK1Uq8KeY++zuu7lavpI3pkou57ru51yxVnThIhKkSi0H11TNN+ud/kGjYFCDxkG/U2/m3Z0iXEOSoBQruZ3c0e6QoLgyKYq/kg53j/IlsJa4QSyFF/LX8WgMl6YskH4xJa5/neKENEbNUtwoVqrldmonghCTKF4QfCUntWoxHzcOLdc9FQS/sXjFLU7o6U4iho/bPKMcFDMS/aVwcdZ04waSK1ZbBWLWhfxPKa4sUmhVc/GGn1qpLuJ2JE9FaL1ai5XJ/mmyiKDIaTVOJNW6iN23Phe3wFLiAlLMFT+RZHiSZ6J/xxWS826TJ2/koAg/LsbkZ/f3kmkmYCh71RjyFBg4O22aOGcSipN2LC4l3ywkJC/5RZxw0TRPpOJW70gSsteXBMmb2N03nrpV3C61DNfA7xBXtGvcoxSrHZJUbwJ2ArGnY7xzUDkexH3nWzQ4Nj123C/JTE3WIl9MV8hunybVlwRS9JvxrkFic5OVqOGx47aIiPuet4iTlllDcdtJdyfcIm2zTKrnJKH52kqcnJvN70sHSS3/1iIHpZzJGZ8ST7yLtXjBMJPkJrFLcUVMM4lk6HCuwC3pGVUd26P1UcRsdh8RE+RAydnt9e23AlCJ2EWRktEysBRNKAavRE98aYO8owXhKmI7SSETxWmhJRlDJmW7fBFxbpxKJhYXXdt2bGYzB7DIuoiWyU7RJJSI7ITWYdw4DtOjx/bKnUiz41QyIQ3pOcyR/sTH8QNsGlFCSR8T7IVdSIfZ5RtKBi30Kp68ITy66JNKJvTSAT8yFUSRYQ+8iudIoaILyOljAkiGHlrHFcW1Vy2GfOxrGsEHh0ofE2XRPsOQcyAgLSHXzGMOY5MI6+30MQEOJxhtemNlKUU6zEM76UXoZFPIhJNrgMCmHD0IOdfh2Gb/kI9sJ5weIoSZLp3ILQuYnEfX+04fEytgYs/0R5Gr0E5uoxs86WOiLBLYiTYM0g7t5PojM+EWvQjGDv5Eb2xHQ7n62P6E3GofGzDpBmMHmPzfn7xU+phgYx3LYX8AhqGIb+vBw0YfmQnkJ3PGPM8bYoNt0Av9SYSlcQqZcNLwoMZhX+GzyFemWyg2u4tukiR9TPCiezojQSYnLPSx3z+yj8WLnmGJUwcK9DF0sU4juiIwnUzaNkCZEa7EMux4EW5oSCeTb9hIsgeKj/2Qif+h62KQEmAnjpwTiEAhk8mHrotRYopO9pHS9pLJYXQuNqVMyCGEG+lTMWOrEvDDMznQE16Lhheaib0QH9zHgkPxkcbFXTAXCC9RbrZMJRPFSV0Hm1aIhHUjbFGnk4ml6B7SkNLWg4fJ+see80JxRTDyQCGoc1jG+hkTnApkyzCMdjLOmMB1D9dMmN3N5tD1hT8ETQI9dk6jdLHpZULnK0Px2DyzE33h5ys7sf1o97+kl0lr7WMnESb2VnqZkGFvbSe70S7iTy2T/8iVmfQiXaWUViaK09mmO8nGDk7xLJi9zk/qkYbilDKx1s0kHYzPslhscepvIHHkNNJHh6SSiaJfpbNhJrYcRbm+PJVMODmyN+3EsaEI/NC9R2UpIb0nUBjr0o88l6G4IiN7xUT2dKIiL6Jbc58+JtziYrqRnPTLnu4XRBd70scErvms7K2Y1MUkWHP/sxBZjpw+JlzcrByJbR+IsV5l4MiHqHr3KWRCNISgwcamVNE7AII/XUe0xT19TBS9WscbeU2UReoy2PL1PRo/mz4m3Jqug3BvKDjnoot24njeMJplC6ljQvurLoHHguUEpIE7VmzGLgcbn68TFmW9f6dtCpnM5LL+c+Q9VsQcIhFzmOd4ciZWPkUFm5AVvHD1LuebOibk68a8zmXwcZzTk7KDa5fkZOlSFAm2ZFMq9KOn/2gmreWqPkher3WVg39FG+wE3pcPNIAxGC72zu77d3d3/fnZ3mIccFkOpz+ICcftkavCz3YKgVFw3IP9wILhdDQ/OTyaTf3exqQYY353cnU/oES94SES6WICt77K1yC9vwkWseGLIOJBv9tjiAA5OBvtBKiP4P3apC/e0GlJGRMyXAYd3F08pHoswGihi9HffojK02PLY2s7AVejt2fDe5cdunWjT8qYiDpbmQlrUf1sC7EYHS0JOKsENxgy4cJzXCaJYw1t6LKxLd1NFxMydNZxuHxGCF90jnpM2k/aKbbd83+2btqjzl3//vv3+bfO6HDih9CY9M4Ef9VU0sWEHm4sJpjx+/oUcxXHsdlTJpcLQWgYi4MwRES/Ww4TPUx+/xgmZNhb92FZU3/1aDjMeYoEPO1duOaP6+QNJcTfLIhXbEL/GCacPErn2e07+o1w6LDp0aOHgBxb3nB8AsjGvSvCw30tHnu9/5QeJkrQhverRWAzVvvUSXtegIGy18MNx5Dm984Jfbphn0xCnysvXp0kSw8Trvf+PYeCQ8HzJ6MfIsjfOS10g+fnMDmdiyeda3K09LOT1DPhuOEcHGyj/Cy86BAzG53RIG/Xt8+JOLT1RiegMuuvKh34EOGHRNks9UwsdJGEfu+uCmI9PJhkP+v341/qO0XufRZ4FdtuXi/gH2CBLMShDL0Pe0i7P4ESRVHamcp1HHYgR5Ozqx+QwqoXmrBkUC9LFiSusje7PsCgvPcJsn0WDKuTtDPhkFy0exLc6DIQe5K1OmNK9Vk1L6RfgHBvKoN8Hl6k7Pm6JFwmfL1BamOxwkGjiGjUpb65IHPHW5uCR0X3gZPEL3TR8FE69G7K7KD7Fr46ywkQueXhpElmoo9QEosbj63XJOnib0t+EYiSXXRAzzJcdENT8fp8e5KZgGekjUdWdp4lavLmLUsrFPCcP4C3lewpku62ZU1JZmKRQhvdwEbVr++q13jbchMIVmTcv7nc/O/MvxJkS18puUzgaz6Bbxk9CXzXrdvVRFd59MaHi+rT7iCZHd4dPsx++j1/Ojmdv2EGNalMuEUWUykdbBF5crInVsthvdn7ZrYUpyTsU2OV/IZnliWVCSUXGH09MJLy5EDQW7bMYdk/71rRpyd49BGJQX9abZ/tSRyT4IrJj64eNp4tZ3NIRIa9sIXG2JV41xwWJjBKE1EhmPQxUZhziHPdK4IgXNvF/ildjhwmL+nrTbIIlDgmeMfiNOyjyosC1ip0JIO+keOUF9T63VASxwQuSXwq6yxcdhcU81TyQ3phe1FeCxXxE3RTwIRTqp9rCXnIBSX6icJiysJiWLaEst43+fsnMLHEUUDAx+NI0TXShzATZbYf8W6DlDARV8GavdlY8OB4VHQmQYeg3I9wxWd6mJADqTsCE46nfmEImsvlfBZrg3sxcARJophgO60lMX2fUd1cBWcylIFzse1yy9CRLIliggjK6Ddq+tBaPEI3fK4WVj2XW0r8P5OJUuQC44u8DyyC0/HUlmGqAv7V0LESiWICtfADLgKY0vCn4U+26hceCFPHCiaKCYyVCd7/DdXule6FjyVntpTRbiF+VYliAuWwXljzQHHcCFyjFvoSOY/2sf6vKlFMVPA4WFa+J4IsWssNKczx9sRHZQKBZqCzk/L0ZsqCtXzYpvcXptyrVrKYQCL/WH7Safdg3LQG0e4L3aZEMVG4emC6uYcLlxVdmBw3qEQxwalyOp5tmAkrT35Q00f7JouJviI66kmscVCzOTUXg1dXkLTzdzjOVd0/dv3e9KYzoNvmYn6HjDPZ2jcECEpALMZFejTouBuWeSZbvna+eYwbt8ybCTd/7pvhO3y3VHA+oEkmST8xEf1ZwTCT5J83qvR5owZV3TWapf8bGT+XFs8vTjYU8+cXu62kn1/MjZ9znSuaLef+jahZImAokT7B8zdI0f6+YSY7XxJuKIp8MTx0crn862tT49cgXzGMpFjtJDfyYN1BTsxWO1pdmuAz0TnhXZPnfmtVcqXdxKayUOvQ3apreuyAQ2kWfvsKkn8psBJxnDdOJFcp7lwkNm/jpB2DN0Ht7yU0R1F0z2yps1LFbYpkQiGiGY+VgFsvfkook09uDN4kVPXR1FqStwtiTj2mkRNov21ozdE7RE5jRZKrleoJ8ykErKQWK5NKbr9VIFYMbfkXpSxS+FQ1n6s9l9v8Tl/czWda+mEGZ03j1fBLKu6fChJ/Sot1nzjdiSkIP1MtV8qfiHc9Eet3iBBxkq8W4/UlSxUrxdxfx6MxIVTp7fdmLQa3++Njh8aj4x24mGTYSQ5NJVeqHe0O9cY0rkwq2Aw33D2qlWrGuwOvqVIr1oqum2/WR/2vjYJBDRpf+7f1Zr7qwqipxR9x1ipCUK5UipXPrluCa8sbE/xa160WPxdzebiAJCHJlClTpkyZMmXKlClT7Pov5r1N/POzSSkAAAAASUVORK5CYII="/>
    </div>
    <div>
        <h2>Abode</h2>
        <p>Entertainment</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>


    </div>
    </div>
  )
}
