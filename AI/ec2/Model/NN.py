import torch.nn as nn

class AE(nn.Module):
    def __init__(self,waveform=True):
        super(AE,self).__init__()
        self.waveform = waveform

        self.encoder = nn.Sequential(
                nn.Conv1d(1,10,20,3),
                nn.ReLU(),
                nn.Conv1d(10,15,20,3),
                nn.Tanh()
                )

        self.decoder = nn.Sequential(

                nn.ConvTranspose1d(15,10,20,3),
                nn.ReLU(),
                nn.ConvTranspose1d(10,1,27,3),
                nn.Tanh()
                )
    def forward(self,x):
        if self.waveform:
            compressed = self.encoder(x)
            output = self.decoder(compressed)
            return output
