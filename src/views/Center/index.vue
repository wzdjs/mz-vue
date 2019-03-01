<template>
  <!-- <div>
    <h1>我是个人中心页面</h1>
    <ul>
      <router-link tag="li" to="/card">卖座卡</router-link>
      <router-link tag="li" to="money">余额</router-link>
      <router-link tag="li" to="system">设置</router-link>
    </ul>
  </div>-->
  <div class="main">
    <div class="center-view" data-enter-time="1551342338">
      <div class="avatar" data-enter-time="1551342338" data-click-fun="track_f_143103">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAAAAAA9Eq1NAAAEX0lEQVR42u2a25KFKAxF/f9PVQEVQVEu8zDTLSpCCFjVNeV+7GPRS8kNkob8CTUfxofxYXwYH8aH8WF8GB/Gh/FhfBgfRnUMOvJZyGWRYp6Gx6cGsWlrtZrZCxij3IzzZTc50cBz+/GIGupicGVdSFbLyyuv599lPYxhDTP8fJTpeJTt159VJYxxcymZn3dm+v6jqoExpCGcc87wJwrnZDEGXawDah8eKJwdCjEm4+Cyq374RZVhLK6SWAHG3ejRmvEYQ2BD9DKPlPRdT+g4LxqModAY441CTaQ9i0wKhqGxGOPFQ+zctyH1M8SVLBJjOC9uedc+qeP2LQx23hHZtzH18qVNORmfYW1KLBFfNhTGKUnupE2LxJ1bYDBmf4W1ayHq1hjGgMBgvsnNLVRzJN1ggvmGoohxjAgM7u9Im6OnfVkxid4z+r3Lwuh28JYkMYTnqQEfYXIz1ppNhryYhPxWMwyGtxK7B0wvoOhAeGdgigSGZ2fy+k+u2c5ONw4JpUhgHK9r+3RkuAWV3gIp4hjjsQK//INgdaGvG8OBFHGM441tB/GCmzN1FkYRx7BPgeu3vlEj7Toy/h7itucgZhjyKD0da5y/tvhNlb/OqcKW3EfzKgzjMHR1Xvw/HxGB9zbtw3cLFTswjMMAphCGCH1/fcGYookVgkEP07gEUOGcc0swSlyzH4meCyAYh7teX7EVxoh79Ob7zm9/1KnDfArjsPKlxWvxkhIKY0HVGZG6A4dxGPlYgDGCbLSBOAotwKAHxoTC0E+OkiXPVTgK40jkXQFGB/LYBpJR/gcYfSmG+Ru28Uc8ZfsbcUPVjqK46mutnFMcRWGI5wybIV2a2rxdJTUcBZnovcAxoTGm6O1KZhGo0BgqfqEAwVieKnNUDLUUicFdscvOqRsFAIZXE1tcWvFPbQLdeVwfz7BAed/TMjSGZ+YWYx3+iX4r6MOayP0GQP79Bi/A8Ndh2RQsfk8Ox/CMNHj3FQ+gJtXoA999SVfnJtDQIgxq6tyLisJRAeFq3BLr4okF7SrcmfNijHN/C9dBUBXmN6Qr7aek7BPW1jm35fO7S3asMs1y7Vnl9tpkpaGa6dr+zOo8btVme25LZ/RhQRTAdnCguQrsSsMooM3xYLf53x5913XPPfq98sAVBw+QnL4FrYwRGBZIa3lh/IxumRCWkxcwCJFZG6MH8g4GGeATLVbkLJw7cMWBFrJS8ibGdbruYexrzF01F4OBPod4GYPp6k6CwKDQcSY7vohBMzxleA8jZwIt2mgswsgLozt9B0Pl5rVXMFR2ZltfwFjdX8iwuClNURlDoijgYQyGIbCjodAwBsKY8SOqZqiGgatDf6ofWgljKqEAFufN2xSwMJZ5sYDSWo4xlFNADtMJjMG4GprLMFgdCmenEgymXSWlwlhTo+Qrr4KaKiVfcRgDdaWrCNnW2VxlbRgM5aprzcd4gSIWxpp6JV9JGGsqlnwFYaypWPIVHOb+AWigHswN4WvJAAAAAElFTkSuQmCC"
          class="avator-icon"
        >
        <div class="nick-name">立即登录</div>
      </div>
      <ul class="my-order-tab">
        <li data-enter-time="1551342338" data-click-fun="track_f_212028">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAADAFBMVEVHcEz/4pL/4pP/9YD/5pX/7ZL//5L/////4pP//6r/5JT//wD/45P//6r//4D/2I7//5n/qmL/45b/4pL/1YD/25L//5n/3Zn/55X/5Z//45f/4ZP/5oz/45L/45P/3Jj/5ZT/45T/45L/45L/4pL/4pH/zJn/4on/w3j/5JP/54z/25L/4Jn/7aT/653/44//5pH/4pT/55X/5JT/6Iv/35f/4I//35X/4JP/3pT/3pD/5KH/447/4ZL/5JL/4pP/45P/5pL/4ZH/4pL/4pP/4ZL/5JL/5pT/5ZD/zJn/3pD/2Jr/5JL/5ZH/4JH/v4D/45P/4pL/4pL/4pH/4pD/45L/4pL/55T/5JT/5JT/4pL/4pL/4pL/4pH/45T/45P/4pH/4ZL/4pL/45P/4ZL/5JL//47/4Zb/4pP/4ZL/5ZT//8z/3ZH/45T/64//4I//6or/64n/34D/75//4ZH/4ZL/45T//7//5JL/5pH/4pP/4JL/4pP/34b/4pP/4pH/45L/yTD/yzT/4pD/45L/4ZL/yTH/yTH/5JT/5Zb/4ZH/4Zj/45L/4pD/3o3/5JP/z0f/4pH/0Ej/z0n/34f/45P/45L/45P/4pL/4pP/45P/5JH/34b/45L/4pL/4ZL/4pH/45L/4pD/yTD/45T/yjX/4JH/4pL/5JT/4ZH/3pD/4JD/yDH/45P/5pL/45L/4ZT/z0n/zkD//7b/zDz/4ZP/4JL/4ZH/5pf/5JT/3I//5JH/4pT/3pL/5JH/3oX/34X/zkj/4Ij/zkb/3Yb/4pL/4Ib/34b/4pL/4ZP/45L/4pP/3oX/3ob/34f/4ZL/1l3/01n/zV//zkL/zD//2Wv/yTH/yTP/0FH/2WD/34T/zDb/34L/4o//yDH/yzz/2nj/4IP/yzj/34X/yTP/zkT/zUH/z0T/zkX/0lb/zTz/4IT/4H3/3oD/3Xf/4ZH/3Hz/12b/23z/2m//3HX/zDn/0VD/yjP/4X7/3oH/zD7/4YX/4YT/5JT/2Wv/yC+fLxBVAAAA/3RSTlMAPVcCKQ4HARoDcAGLBgQNCgMkvwYOBQ8MCBILFDalFaQJHb5dngUaCCgVBxkODSkKICImFhA0GCETFxMkMhw/aSyiwrq+oh8nCicaLzAsBJnUqZVxb1M0TDqfsquwq7W6zcujtawJEYuKTQUeShkZGA0IEF9QNwRHHklLodLEyrjpsHR/hfn1OURnKlI+L5Xwl/L35ra8mqaunafYxsnYu9Cm76TznHyfhz6D92M9bFa1yQfQVXU8R0M7QU82VsbP8d7vzN7ezszG27/WyuHJLC4z2tii6/rJNWiziYvzyWaEyIDtqt/R49O+olp8PJBtjnmzV5fA701zoJmReaBHVlCcAAAD/UlEQVRIx2NggAJubnZCgJubARkANTAzMwty4gOCQBVAjQgtzMycfGpiIry82tps2IC2Ni+viJgaHydQHzfUXYJ8YrySBtIShXqioqzYgKioXqGEtIEkrxifIMiV3EBXqWkY8ItLyZgU5Oepc2AD6nn5BSYyUuL8BhpqQHcyAK0RUeRP11LPMbQx1tTUZ8EG9DU1jW0Mc9S10vkVRfgEGdg5RdJELzQ1/icCNDZdshZNE+Fk4Mz21L24+D+RYPFNeV3PbAa+In7rpv9Eg9t21vxFDGIGxTqNxGu6ZqNTbMDAyy9v+J8E4Ggoz88gKa7jRYqmcC8dcQZPSyU/UjQx+ilZMkjLGPqSommnr6EMg4SWkRkpmirMjLQYJKyEZEnRVC0rZEWmJhMjs6drEIKTpxydH7gwMal+3vl59UmJCwPnn5uMkG3bWGVmZAIMCAvfzltX4MJTTgUmznV2TUhoaGhISHB1npsYeAwu+eyxSqevhQyDopSSoz1T82WY+KHAJOcF8bGpcUFBQXGpsfELnJPmwORe3A1lsndUkmKQNPXW7CjtutMGlZhUW5cQHbPIKUpVVTXKaVFMdMLZCVCp669buko7NL1NGTbryRvZ7lDZdoNwGLx8v01lh62RvB6DmICUUndvj8NVwpo+tzr09HYrSQkw8GmImwvtrSp5SFjT778lVXuFzMU1GPx5pS0r+3bve0tY05+Qfbv7Ki2leRmYyxVNOfQj93wkrOmfw55IfQ5TxXIGZn9JXXPjsoiNhDV964ooMzbXlfSHaXqzBh7kJ6fFzwySc6qpqXGSC5oZP+0ILMjbfsI1gZ3Xex9m3JwTdS7RMTOg8TQjJtqlrhYmtyUM6jxwQLx7BHfDmXrnqbGz3WZNDwgImD7LbXbsVOcDcMktPyABAQryr+0Ihx88fjolLnlWwMT+4P6JAbOS41L2H0bItv8CBzkocknJGuDIBSUjUjSBkxEowZKiCZxgQVmDFE3grAHKhKRoAmdCUHYnRRM4u5NdGj0hXs93iCZgYfmKeE2bwIUlqFj+co9YPe0fwMUyqAJgfLBpKTFalj7/FAauAEBVTXiuSkhrsFtqSoKrqzAYKMMAhOvqmpCS6hbcGqKSC65qQJWa47qskpCWjOBlK9ySlyiAgBwMgHlLkt1WLAvOaAkpyVoHrtRA1aeNrX2WikPz8tUrMzMzeDBBRmbmytXLmx1UsuxtwdUnqKK287BdlRumstZhfWgoFzYQGrreYa1KWO4qWw9wRQ1qEsgrCfl02FdElIZt3cCEDWzYGlYaUWHf4SOkBG4SgBsf1t7uXn6+4WW7IrczYgPbI3eVhfv6ebl7QxofZDVzyGpQkdV0I6eRCAD6IT6Nn1KTnwAAAABJRU5ErkJggg=="
            width="26px"
            height="26px"
            alt
          >
          <span class="mint-badge is-primary is-size-small" style="display: none;">99+</span>
          <div class="common-p">电影订单</div>
        </li>
        <li data-enter-time="1551342338" data-click-fun="track_f_131387">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAADAFBMVEVHcEzMzGG/v4D//16qqlV3d3fR6Fv//////wD//4DV1VUAAADM5mbE2GLB4Vy2223D0lif/0uA/3Lb22jH21zD1lzE3laq1Umyv0DJ3Vq4ylrS3ly/313L3mC//4DD4VrB112/1VfP4FzH21zH21y220nG21zF21zK317D213G11zf32DE2FvHzGHG11mvtlC4v1LH21zM3WbV2oDM/2bI4FzA2VvI3F7G2VvE21/D2FrZ52PM5k3V6l2/z1zL3F7D2V2nzmLH21wA/wDN1l3D1V3D0mnL3V6/2VnI3lzH116ZzFi721fA2FzF2VvK4FzH2l3O4F3Q5l7I11vO2lrG2V/G21/H2lzG3lrG217H213L0k7D2VzI2VjG21zH3FzH213J3FzF21zI3F3M3V7H2l3I21zP32DG2lrR0V3//2fG12DH21vM3U7Q3lzF3F3E2lvE2VrG213H21zH3FzH21zH213H213H21zF213J2FzH3FzF2lzF213I01nF3l/F3FbK2l3F01zI3V7I4V7H3F7C2lvD2FzM2l3I21283lnJ3l3H21zH3F3H3FzI3V3H3FzJ3l/G21zG2lzG21zH213G2lzH2FzE2lzH21zG2lzH2l3J5F7H213V1VzF21zG3V7H21zK21vH2lvJ31nG3V3H2lzH2l3I3FvG2lzH2l3K3F3H2lzJ3FzG2V3H2l3H3F7H2l3H3F3H213I212//0DI4l3H3V3G2lzG2V3P2VvG2l3F2VrF21zH3V5mzDPH21zK3FzG2l3L31/H2F7H21zK3WDK2lrA2Vyx2GLG21vI3FyqqlXH3F3K3l7H21zD11vI2lzG2VzG2l7E3lvJ2V3D1lbG3F3O51zH3F7Y607H213M2l7L3V/J3l3G2lzH213K3l3K313K2l/L4WLK4WPH31zG21y221vm5mbH2lzK21zI2lzD3lfH313I2lnH3VzB01fG2lzF2lzC1FvH2lvG2VzH2VvS3WDH3F3H2V7H213J217F2VzI3l7G2lypYCa1AAAA/3RSTlMABQQDAwILAQECBgEKDQgHEQMCByMZCQYEHAsREA4EERoMFf5bBy0bGBZGCCEKJgcIUA8GBRkVK1E4Ig0KDBAsNwjTARQYETMUFxMFDxxM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"
            width="26px"
            height="26px"
            alt
          >
          <div class="common-p">拼团订单</div>
        </li>
      </ul>
      <!---->
      <div class="margin-set my-card" data-enter-time="1551342338" data-click-fun="track_f_946694">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iWT/hWP/hGL/hWL/hGP/hGP/hWP/hWP/jWr/hGJJuum2AAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII="
          width="20px"
          height="20px"
          alt
        >
        <!-- <span class="label">卖座卡</span> -->
        <router-link tag="span" to="/card" class="label">卖座卡</router-link>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW+wMXR0dHFxcW9wcW///+9wMW9wca/w8a+wcbCwsa+wMW+w8e9wcW+wMe9wca+wsa/wce9wse+wMXAwMe9wcbBwci+wMW+wcW/xsa+wse/wsa+wsW+wca9wMa/wca+wMa+wca9wcW/1dW+wcbIyMi/wse+wsXCws69wMUGLikCAAAAK3RSTlMAgrXLCxblBPz1TGY23DfdnraBg2XPTcol6+okcXCNneSLt5yADMwXZEsVaXeoDQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVAzxDgC1AqzWNwW8V2B75R/K1h6BVPI7QvxZWH50Pxx8E1V/wGOp19ByLNtxl+k9aw0doG1CbgK/naAlwhVztgLTEClhJL4CSxcBDL6zQeEiuwH6BOA/Xj9H/9MVRvskC9MfssMnPPD39REI83eEhXAAAAAElFTkSuQmCC"
          alt
          class="arrow"
        >
      </div>
      <div
        class="margin-set my-balance"
        data-enter-time="1551342338"
        data-click-fun="track_f_481778"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABmFBMVEVHcEz/szL/szL/sjP/tDX/tkn/sjL/szL/szP/szL/tTb/tDT/sjL/tTL/tDz/////sjP/szP/uUb/tj3/xjn/szT/tjP/szL/uzP/sjL/szP/szP/sjT/tjf/sjX/sjP/szP/tTL/szL/szX/sjP/v0D/szP/szL/szP/szL/tTX/v0D/szL/szP/szP/tTL/szP/szP/v0D/szL/szL/szT/szL/szT/szP/tDT/sjP/uTr/szL/tTT/tjL/sjP/szP/szL/vDf/szP/tTP/sjP/sjT/tDL/uTX/tDj/vDb/sjP/szP/tTr/szP/tzT/sjL/szP/szP/uTb/tDL/sjP/szP/sjP/szL/sjP/sjL/szT/szP/szL/szP/sjL/tDP/szf/szP/szP/szL/sjP/szL/tjf/szP/sjP/sjP/zDP/sjP/szP/szP/szb/szP//1X/szL/szP/sjP/sjP/szL/sjP/sjL/szP/tDL/uDn/szP/szP/sjL/szP/sjL/uDP/ujv/tDP/sjL/sjT/tDP/sjLb5KWHAAAAh3RSTlMA7v6IUgfL+O2TJljzYBEB/PsLFQlsI8YP6fGvUyo/8tlW6k3iBOPK+qgwCPQyuUwouAzQ5Da8XvdikhaJTzicluAXri3eXXodKRPUCh/DJ9UUpSFmn+HHrH79dqHa8Ld9JbRQnnTADtepugXYm88vhgPWl+y9W/bByHAS6+bbb/kZGpXvhV8/kepJAAACJ0lEQVQYGXXBg2LrAAAF0Nt2SbPa1mxbb7Zt89k272+/pmu6JM3OQUH9Byt13r9tRZG5chp4E4HeO4Yj0Jn7yCnolVGsgk5VmFPQ+/yV2+vQWN/mFxeK1G8xZoeKPcatJhhw7ZCbPuS1b5I7LhjbJTMTyJnIkLu4x0aMjdMB5ASmGxnbgBHfGhmfQcFMnFzzocjiCh12aNgdXFmEjq2S88vQWZ5npQ0as1EuRVAkssToLFT8k2xbgIGFNk76USCEWROAoUANwwIUgxwdwz3GRjmIvC6P5wFyqp7VvUSO++kTH3IeeDxdyHF30IJb7lccQc4LVj7GLQs73JANsVNA3qnET8hy0vEceUInhyATGURB6sdeBZCq3WtBQZA1yGqlJODOPzrqbRK/406DxFYAlzyA2l9Wf+NvqB3wEkAzE1DUSZJkYtYfSZLqoEiwDcANk1CcWWWkVXYGRZI3ANK8hpbJDK1rpgE42A4tkxla7XQAyPAUilCJrJElshAUNmYAXDEFRTVVqqFI8QrABfehKCuVWVkqK4NinxcAzilCy2SGlshzAA1p2qBhMkPDxnQDsobZDA2TGRrNHIZsQGIP1ExmqPVQGkBOH3sroPLwEVQqetmHvH56nbiH08t+FFjI7iQMJLtJC1Sc5fSOJwRoCIlxL8ud0HC9riWPji32ppBfEPyhJrvl+IisHXFBbzUoUkcMrsLQr5aTuHgYtVqjh2L8pOUnVP4DxyCVhLSS0SgAAAAASUVORK5CYII="
          width="20px"
          height="20px"
          alt
        >
        <!-- <span class="label">余额</span> -->
        <router-link tag="span" to="money" class="label">余额</router-link>
        <span class="value">
          <span class="price-decimal price-fmt">
            <i>￥</i>
            <span class="interge" style="font-size: 15px;">0</span>
            <span style="display: none;">.</span>
            <span class="decimal" style="font-size: 10px;"></span>
          </span>
        </span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW+wMXR0dHFxcW9wcW///+9wMW9wca/w8a+wcbCwsa+wMW+w8e9wcW+wMe9wca+wsa/wce9wse+wMXAwMe9wcbBwci+wMW+wcW/xsa+wse/wsa+wsW+wca9wMa/wca+wMa+wca9wcW/1dW+wcbIyMi/wse+wsXCws69wMUGLikCAAAAK3RSTlMAgrXLCxblBPz1TGY23DfdnraBg2XPTcol6+okcXCNneSLt5yADMwXZEsVaXeoDQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVAzxDgC1AqzWNwW8V2B75R/K1h6BVPI7QvxZWH50Pxx8E1V/wGOp19ByLNtxl+k9aw0doG1CbgK/naAlwhVztgLTEClhJL4CSxcBDL6zQeEiuwH6BOA/Xj9H/9MVRvskC9MfssMnPPD39REI83eEhXAAAAAElFTkSuQmCC"
          alt
          class="arrow"
        >
      </div>
      <div
        class="margin-set system-set"
        data-enter-time="1551342338"
        data-click-fun="track_f_795727"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEVHcEy5zVO5zVHCzFK4zFDE2GK5zFH//4C6zFG4zFG5zFC5y1D//1W811G4y1HMzGa5zFG4zFC4y1G7zFW9zFK5zFG5zlK5y1C4zVG5z1S5y1C5zFHMzGa5y1K5y1C6zFG4zFG8zlO4zFG4y1C4zFC6zFK4zFG6y1G5y1G4zFG4zFG5y1G4zFC8zlG7zFW5zFC5y1C7y1G5zFG4zFK5y1G6zFC5y1C5zFG5zFC5zFG4zFG/1VW5zlG801m50V26zVC5zFG/z1i5zVDD0lq5y1G5y1DI21vG41W4y1C4zFC50VH////CzlW4zlG6zFG9zFC4zFG5zVC4zVK9zlK/1VW5zVK501i5y1G4zFG7zVO5zFG5zVG//4C5y1G5zFO4y1G4zVW4y1G4y1G5y1G6zli5zVG5zFC5y1G6zVK5zFC8z1K4zFK5zFG5zFC5y1G8zlW5zFG+0FPb2225zFC4zlO5zFK4zVC5zFG5zFG4y1C80FG5zFC80lO6y1C4zFG5zFC5zFG4zFC41VW5y1C5zFG4zFC4zFC5zFG4zFG5zFG5zVG/0VK4y1G4zFG4zFG5zFG4y1C4y1G7zVG7zVC5zFG5y1C4y1G50VW4y1G5zlG5y1K6y1O5zFG7zVK4zFG5zFG/32C5zFC6y1K5zFC6zFC6y1K5y1C4y1A6YiA9AAAAp3RSTlMATUIZwg3zAoHg/s8DE4UF8O78HjL6Pt5hOuLQCoDFiHdE/fH4faae9+rNwfU5D3z7T3RB04yZx2mhqRhiFwtcqiB/Ee2oDgny6ywBFS9VI9xmcB8MVx23m0dfdQTsUMok45S2GoSSo2CcNXORyHsq5CsH0lOGidd4vCb0Iln5tYu/Eo+935/EjaSOHLGwkL422SlWrrKtIV5YVEqHOLSzCKVnzG92y+T4Gd0AAAJFSURBVDjLnZVVd9tAEEbHMVMMsQMOMzNTAw0zJ2VmZmZmZsb7N/tgkJTK9TnV03zf3tXszoyORP7nCTSnmYaj4mLx+ThY402A0vGw6rZT0BvQwTo7wPt4qopHKSIi+XZmyqCjZjWXP0DZ4SGRpFH811r2nIEcd2fuCGn7tVyXnxPHREQk5XYRwNE8l4j0HSK4VwO20n48GrvzZ3uqXeHYs49WDXiQPP0b5rFboxvI1QdzadDoXWTrg/0ka3QOm/XBenLUMhVflj6Y5SNVUfMhiuO1tZbQfCT0pJdjckUXzDanxeK0maPaVUl5ukdE3MtV8DnmJ9kBwJ4U2/kFqpbd8h1HxaI1xjkwGYxGgwlHjLQuVjiYlRV+Kgcy20m2iohYk7GbFX+OFflBhmLYMEVebjVhU/wMfkuIJcXIxBANDTgVf4mQWFhQDAvGaGjEovgLWCSIJzH4lTIpZyJx6mlm5BnPE18mlUp5xYtE5Zn8WMk36afp7Fr5R8EfPAH4JU+DUJgucVsYGGD0/tQnl4i7fgfUKtltmeqhuH6Lh0rC9XWOdXGm7AZ3VOWTDTTpc8M+xtR64zZ1x0Xd5AqtsZ05XfAdJVrjAFd1wfe81ho2dR9Uzxhp4xrjHF26oCuNDxrjChciRd+ZvWWT19m8Nazejqz6PteUQkm3iLQVhTtTkG0VmRiEkqFVSS4Vcrk9cAoGG9011S1+7k2WFlHY8/dxpnv9QPBkZLC8QMHLN7onTzntoy02uHXeu31xfwtZR1Tb1miW/gAXS6eS/ovNKQAAAABJRU5ErkJggg=="
          width="20px"
          height="20px"
          alt
        >
        <!-- <span class="label">设置</span> -->
      <router-link tag="span" to="system" class="label">设置</router-link>

        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW+wMXR0dHFxcW9wcW///+9wMW9wca/w8a+wcbCwsa+wMW+w8e9wcW+wMe9wca+wsa/wce9wse+wMXAwMe9wcbBwci+wMW+wcW/xsa+wse/wsa+wsW+wca9wMa/wca+wMa+wca9wcW/1dW+wcbIyMi/wse+wsXCws69wMUGLikCAAAAK3RSTlMAgrXLCxblBPz1TGY23DfdnraBg2XPTcol6+okcXCNneSLt5yADMwXZEsVaXeoDQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVAzxDgC1AqzWNwW8V2B75R/K1h6BVPI7QvxZWH50Pxx8E1V/wGOp19ByLNtxl+k9aw0doG1CbgK/naAlwhVztgLTEClhJL4CSxcBDL6zQeEiuwH6BOA/Xj9H/9MVRvskC9MfssMnPPD39REI83eEhXAAAAAElFTkSuQmCC"
          alt
          class="arrow"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <script lang="less">
  @import url('index.less');
</script>
