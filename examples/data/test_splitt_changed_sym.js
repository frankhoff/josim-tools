* gnetlist.exe -g spice-sdb -O jsim -O param -O sort_mode -v -o ./js/test_splitt_changed.js C:\Program Files (x86)\gEDA\test_splitt_changed.sch
*********************************************************
* Spice file generated by gnetlist                      *
* spice-sdb version 4.28.2007 by SDB --                 *
* provides advanced spice netlisting capability.        *
* Documentation at http://www.brorson.com/gEDA/SPICE/   *
*********************************************************
*vvvvvvvv  Included SPICE model from ./js/mitll_dcsfq.js vvvvvvvv

* Process parameters
.param B0=1
.param Ic0=0.1m
.param IcRs=100u*6.859904418
.param B0Rs=IcRs/Ic0*B0

* Global variations
.param Itotal=1
.param Btotal=1
.param Ltotal=1

* Nominal parameters
.param B01rx2_unscaled=1
.param B01tx1_unscaled=2
.param B1_unscaled=3.25
.param B2_unscaled=2.5
.param IB01rx2_unscaled=155u
.param IB01tx1_unscaled=130u
.param IB1_unscaled=569u
.param L01_rx2_unscaled=0.2p
.param L01_tx1_unscaled=2.5p
.param L02_tx1_unscaled=3.3p
.param L03_tx1_unscaled=8p
.param L1_unscaled=1.4p
.param L2_unscaled=2p
.param L3_unscaled=0.4p
.param L4_unscaled=1.9p
.param L5_unscaled=2p
.param LP01_rx2_unscaled=0.34p
.param LP01_tx1_unscaled=0.05p
.param LP1_unscaled=0.2p
.param LP2_unscaled=0.2p
.param LP_IB1_unscaled=0.2p
.param LPR01_rx2_unscaled=0.2p
.param LPR01_tx1_unscaled=0.2p
.param LRB01rx2_unscaled=0.5p
.param LRB01tx1_unscaled=1p
.param LRB1_unscaled=1p
.param LRB2_unscaled=1p

* Parameterized values
.param B01rx2=Btotal*B01rx2_unscaled
.param B01tx1=Btotal*B01tx1_unscaled
.param B1=Btotal*B1_unscaled
.param B2=Btotal*B2_unscaled
.param IB01rx2=Itotal*IB01rx2_unscaled
.param IB01tx1=Itotal*IB01tx1_unscaled
.param IB1=Itotal*IB1_unscaled
.param L01_rx2=Ltotal*L01_rx2_unscaled
.param L01_tx1=Ltotal*L01_tx1_unscaled
.param L02_tx1=Ltotal*L02_tx1_unscaled
.param L03_tx1=Ltotal*L03_tx1_unscaled
.param L1=Ltotal*L1_unscaled
.param L2=Ltotal*L2_unscaled
.param L3=Ltotal*L3_unscaled
.param L4=Ltotal*L4_unscaled
.param L5=Ltotal*L5_unscaled
.param LP01_rx2=Ltotal*LP01_rx2_unscaled
.param LP01_tx1=Ltotal*LP01_tx1_unscaled
.param LP1=Ltotal*LP1_unscaled
.param LP2=Ltotal*LP2_unscaled
.param LP_IB1=Ltotal*LP_IB1_unscaled
.param LPR01_rx2=Ltotal*LPR01_rx2_unscaled
.param LPR01_tx1=Ltotal*LPR01_tx1_unscaled
.param LRB01rx2=Ltotal*LRB01rx2_unscaled
.param LRB01tx1=Ltotal*LRB01tx1_unscaled
.param LRB1=Ltotal*LRB1_unscaled
.param LRB2=Ltotal*LRB2_unscaled

* Bias currents
.param RB01rx2=B0Rs/B01rx2
.param RB01tx1=B0Rs/B01tx1
.param RB1=B0Rs/B1
.param RB2=B0Rs/B2

*****************************************
* Begin .SUBCKT model                   *
* spice-sdb ver 4.28.2007               *
*                                       *
* RSFQ generic cell for MITLL sfq5ee    *
* Authored 3 Nov 2015, CJ Fourie, SU    *
*****************************************
.SUBCKT mitll_dcsfq 8 11
*==============  Begin SPICE netlist of main design ============
B1         1          2          jjmitll100 area=2.25
B2         3          4          jjmitll100 area=2.25
B3         5          6          jjmitll100 area=2.5
IB1        0          2          pwl(0      0 5p 275uA)
IB2        0          5          pwl(0      0 5p 175uA)
L1         8          7          1p
L2         7          0          3.9p
L3         7          1          0.6p
L4         2          3          1.1p
L5         3          5          4.5p
L6         5          11         2p
Lp2        4          0          0.2p
Lp3        6          0          0.2p
LRB1       9          2          1p
LRB2       10         4          1p
LRB3       12         6          1p
RB1        1          9          4.31
RB2        3          10         4.31
RB3        5          12         3.88
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.ends mitll_dcsfq
*******************************
*^^^^^^^^  End of included SPICE model from ./js/mitll_dcsfq.js ^^^^^^^^
*
*vvvvvvvv  Included SPICE model from ./js/mitll_ptltx.js vvvvvvvv
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 16 Oct 2016, CJ Fourie, SU    *
*   (Optimized)                          *
******************************************
.SUBCKT MITLL_PTLTX 1 2
*==============  Begin SPICE netlist of main design ============
B01        3          7          jmitll     area=2
B02        4          6          jmitll     area=1.62
IB01       0          10         pwl(0      0 5p 230u)
IB02       0          11         pwl(0      0 5p 82u)
L01        1          3          2.5p
L02        3          4          3.3p
L03        4          5          0.35p
LP01       0          7          0.05p
LP02       0          6          0.12p
LPR01      3          10         0.2p
LPR02      4          11         1.3p
LRB01      7          8          1p
LRB02      6          9          1p
RB01       8          3          4.85
RB02       9          4          6.3
RINS       5          2          1.36
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160ohm, rn=16ohm, icrit=0.1mA)
.ends MITLL_PTLTX
*******************************
*^^^^^^^^  End of included SPICE model from ./js/mitll_ptltx.js ^^^^^^^^
*
*vvvvvvvv  Included SPICE model from ./js/mitll_ptlrx.js vvvvvvvv
******************************************
* Begin .SUBCKT model                    *
* spice-sdb ver 4.28.2007                *
*                                        *
* RSFQ generic cell for MITLL sfq5ee     *
* Seedling project under IARPA-BAA-14-03 *
* Authored 1 March 2016, JA Delport, SU  *
* Last mod 16 Oct 2016, CJ Fourie, SU    *
*   (Optimized)                          *
******************************************
.SUBCKT MITLL_PTLRX 2 6
*==============  Begin SPICE netlist of main design ============
B01        1          9          jmitll     area=1
B02        4          8          jmitll     area=1
B03        5          7          jmitll     area=1
IB01       0          10         pwl(0      0 5p 155u)
L01        2          1          0.2p
L02        1          3          4.3p
L03        3          4          4.6p
L04        4          5          5.0p
L05        5          6          2.3p
LP01       0          9          0.34p
LP02       0          8          0.06p
LP03       0          7          0.03p
LPR01      3          10         0.2p
LRB01      9          11         0.5p
LRB02      8          12         1p
LRB03      7          13         1p
RB01       11         1          9.7
RB02       12         4          9.7
RB03       13         5          9.7
.model jmitll jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160ohm, rn=16ohm, icrit=0.1mA)
.ends MITLL_PTLRX
*******************************
*^^^^^^^^  End of included SPICE model from ./js/mitll_ptlrx.js ^^^^^^^^
*
*==============  Begin SPICE netlist of main design ============
B01rx2    4          6          jjmitll100 area=B01rx2
B01tx1    9          14         jjmitll100 area=B01tx1
B01tx2    33         37         jjmitll100 area=B01tx1
B1         19         20         jjmitll100 area=B1
B2         21         22         jjmitll100 area=B2
B3         23         24         jjmitll100 area=B2
IB01rx2   0          7          pwl(0      0 5p IB01rx2)
IB01tx1   0          16         pwl(0      0 5p IB01tx1)
IB01tx2   0          39         pwl(0      0 5p IB01tx1)
IB1        0          31         pwl(0      0 5p IB1)
IIN        0          1          pwl        (0 0 110p 0 120p 600u 130p 0 200p 0 210p 600u 220p 0 230p 600u 240p 0)
L01rx2    5          4          L01_rx2
L01tx1    10         9          L01_tx1
L01tx2    27         33         L01_tx1
L02tx1    9          11         L02_tx1
L02tx2    33         34         L02_tx1
L03tx1    11         12         L03_tx1
L03tx2    34         35         L03_tx1
L1         4          19         L1
L2         19         25         L2
L3         25         26         L3
L4         26         21         L4
L5         21         10         L5
L6         26         23         L4
L7         23         27         L5
LP01rx2   0          6          LP01_rx2
LP01tx1   0          14         LP01_tx1
LP01tx2   0          37         LP01_tx1
Lp1        20         0          LP1
Lp2        22         0          LP2
Lp3        24         0          LP2
LPIB1     25         31         LP_IB1
LPR01rx2  4          7          LPR01_rx2
LPR01tx1  9          16         LPR01_tx1
LPR01tx2  33         39         LPR01_tx1
LRB01rx2  0          8          LRB01rx2
LRB01tx1  0          15         LRB01tx1
LRB01tx2  0          38         LRB01tx1
LRB1       28         0          LRB1
LRB2       30         0          LRB2
LRB3       29         0          LRB2
RB01rx2   8          4          RB01rx2
RB01tx1   15         9          RB01tx1
RB01tx2   38         33         RB01tx1
RB1        19         28         RB1
RB2        21         30         RB2
RB3        23         29         RB2
RINStx1   12         13         1.36
RINStx2   35         36         1.36
ROUT       3          0          2
ROUT2      32         0          2
T0in0in    17         0          5          0 LOSSLESS Z0=5 TD=10p
T0out      13         0          18         0 LOSSLESS Z0=5 TD=10p
T0out2     36         0          40         0 LOSSLESS Z0=5 TD=10p
X0rx       MITLL_PTLRX 18         3
X0rx2      MITLL_PTLRX 40         32
X0tx2      MITLL_PTLTX 2          17
XDCSFQIN   MITLL_DCSFQ 1          2
.model jjmitll100 jj(rtype=1, vg=2.8mV, cap=0.07pF, r0=160, rn=16, icrit=0.1mA)
.tran 0.1p 400p 0 0.1p

.print DEVP IIN
.print DEVP B01rx2
.print DEVP B01tx1
.print DEVP B01tx2

.end