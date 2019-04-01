using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using TheCallCenter.Data.Entities;

namespace TheCallCenter.Hubs
{
  public class CallHub : Hub<ICallHub>
  {
    public async Task CallAnswered(Call call)
    {
      await Clients.Others.CallAnswered(call);
    }

    public async Task NewCall(Call newCall)
    {
      await Clients.Others.NewCall(newCall);
    }
  }
}
