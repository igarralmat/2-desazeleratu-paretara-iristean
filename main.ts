let Distantzia = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    Distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (Distantzia > 60) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else if (Distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else if (Distantzia > 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (Distantzia > 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 15)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
